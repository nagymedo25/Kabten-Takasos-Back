const jwt = require('jsonwebtoken');
const { pool } = require('../config/db');

// Protect routes - verify JWT
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const result = await pool.query(
        'SELECT id, "fullName", username, department, "profileImage", role, onboarded, "createdAt" FROM users WHERE id = $1',
        [decoded.id]
      );

      const user = result.rows[0];

      if (!user) {
        return res.status(401).json({ message: 'المستخدم غير موجود' });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'غير مصرح - الرمز غير صالح' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'غير مصرح - لا يوجد رمز' });
  }
};

// Admin only middleware
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'غير مصرح - للمسؤول فقط' });
  }
};

module.exports = { protect, adminOnly };
