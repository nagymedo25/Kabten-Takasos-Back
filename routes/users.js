const express = require('express');
const { pool } = require('../config/db');
const { protect, adminOnly } = require('../middleware/auth');
const bcrypt = require('bcryptjs');
const { uploadProfileImage } = require('../config/cloudinary');
const { seedMatchPoints } = require('../socketHandlers/matchHandler');
const router = express.Router();

// @route   GET /api/users - Get all users (admin)
router.get('/', protect, adminOnly, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, "fullName", username, department, "profileImage", role, onboarded, "createdAt" FROM users WHERE role = $1 ORDER BY "createdAt" DESC',
      ['student']
    );
    // Map id to _id for frontend compatibility
    const mapped = result.rows.map(u => ({ ...u, _id: u.id }));
    res.json(mapped);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/users/:id - Get single user (admin)
router.get('/:id', protect, adminOnly, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, "fullName", username, department, "profileImage", role, onboarded, "createdAt" FROM users WHERE id = $1',
      [req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'المستخدم غير موجود' });
    }
    const user = result.rows[0];
    res.json({ ...user, _id: user.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/users/onboard - Set department (student)
router.put('/onboard', protect, async (req, res) => {
  try {
    const { department } = req.body;
    if (!['programming', 'networks', 'communications'].includes(department)) {
      return res.status(400).json({ message: 'القسم غير صالح' });
    }

    const result = await pool.query(
      `UPDATE users SET department = $1, onboarded = true 
       WHERE id = $2 
       RETURNING id, "fullName", username, department, "profileImage", role, onboarded, "createdAt"`,
      [department, req.user.id]
    );

    const user = result.rows[0];

    // Ensure match_points row exists so user always appears in leaderboard
    await seedMatchPoints(user.id);

    res.json({ ...user, _id: user.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/users/:id - Update user
router.put('/:id', protect, async (req, res) => {
  try {
    if (req.user.id !== req.params.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'غير مصرح' });
    }

    const id = req.params.id;
    const { fullName, username, department, password } = req.body;
    
    // Build dynamic update query
    let updateFields = [];
    let values = [];
    let counter = 1;

    if (fullName) { updateFields.push(`"fullName" = $${counter++}`); values.push(fullName); }
    if (username) { updateFields.push(`username = $${counter++}`); values.push(username); }
    if (department) { updateFields.push(`department = $${counter++}`); values.push(department); }
    if (password) { 
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateFields.push(`password = $${counter++}`); 
      values.push(hashedPassword); 
    }

    if (updateFields.length === 0) {
      return res.json({ message: 'لا توجد حقول للتحديث' });
    }

    values.push(id);
    const query = `UPDATE users SET ${updateFields.join(', ')} 
                   WHERE id = $${counter} 
                   RETURNING id, "fullName", username, department, "profileImage", role, onboarded, "createdAt"`;

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'المستخدم غير موجود' });
    }

    const user = result.rows[0];
    res.json({ ...user, _id: user.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/users/:id/profile-image - Upload/update profile image
router.put('/:id/profile-image', protect, (req, res) => {
  if (req.user.id !== req.params.id && req.user.role !== 'admin') {
    return res.status(403).json({ message: 'غير مصرح' });
  }

  uploadProfileImage(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: 'فشل رفع الصورة: ' + err.message });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'لم يتم رفع أي صورة' });
    }

    try {
      const profileImage = req.file.path; // Cloudinary URL
      const result = await pool.query(
        `UPDATE users SET "profileImage" = $1 WHERE id = $2
         RETURNING id, "fullName", username, department, "profileImage", role, onboarded`,
        [profileImage, req.params.id]
      );

      const user = result.rows[0];
      res.json({ ...user, _id: user.id });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});

// @route   DELETE /api/users/:id - Delete user (admin)
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING id', [req.params.id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'المستخدم غير موجود' });
    }
    
    res.json({ message: 'تم حذف المستخدم بنجاح' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
