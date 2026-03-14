const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { pool } = require('../config/db');
const { uploadProfileImage } = require('../config/cloudinary');
const { seedMatchPoints } = require('../socketHandlers/matchHandler');
const router = express.Router();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @route   POST /api/auth/register
router.post('/register', (req, res) => {
  uploadProfileImage(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: 'فشل رفع الصورة: ' + err.message });
    }

    try {
      const { fullName, username, password } = req.body;

      // Check if user exists
      const userResult = await pool.query(
        'SELECT id FROM users WHERE username = $1',
        [username]
      );

      if (userResult.rows.length > 0) {
        return res.status(400).json({ message: 'المستخدم موجود بالفعل' });
      }

      // Hash password
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Cloudinary returns the URL in req.file.path
      const profileImage = req.file ? req.file.path : '';

      const insertResult = await pool.query(
        `INSERT INTO users ("fullName", username, password, "profileImage") 
         VALUES ($1, $2, $3, $4) 
         RETURNING id, "fullName", username, role, department, onboarded, "profileImage"`,
        [fullName, username, hashedPassword, profileImage]
      );

      const user = insertResult.rows[0];

      // Seed a 0-point match_points row so user appears in leaderboard immediately
      await seedMatchPoints(user.id);

      res.status(201).json({
        _id: user.id,
        fullName: user.fullName,
        username: user.username,
        role: user.role,
        department: user.department,
        onboarded: user.onboarded,
        profileImage: user.profileImage,
        token: generateToken(user.id)
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});

// @route   POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: 'بيانات الدخول غير صحيحة' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'بيانات الدخول غير صحيحة' });
    }

    res.json({
      _id: user.id,
      fullName: user.fullName,
      username: user.username,
      role: user.role,
      department: user.department,
      onboarded: user.onboarded,
      profileImage: user.profileImage,
      token: generateToken(user.id)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/auth/me
router.get('/me', require('../middleware/auth').protect, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
