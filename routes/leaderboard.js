const express = require('express');
const { pool } = require('../config/db');
const { protect } = require('../middleware/auth');
const router = express.Router();

// @route   GET /api/leaderboard/:department - Get leaderboard
router.get('/:department', protect, async (req, res) => {
  try {
    const { department } = req.params;

    const result = await pool.query(
      `SELECT 
        u.id as "userId",
        u."fullName",
        u."username",
        u."department",
        u."profileImage",
        COALESCE(SUM(FLOOR(er.percentage / 10) + CASE WHEN er.percentage = 100 THEN 3 ELSE 0 END), 0)::int 
        + COALESCE(mp.points, 0)::int as "totalPoints",
        COALESCE(mp.points, 0)::int as "matchPoints",
        COUNT(er.id)::int as "totalExams",
        MAX(er."createdAt") as "lastExam"
       FROM users u
       LEFT JOIN exam_results er ON u.id = er."userId"
       LEFT JOIN match_points mp ON mp."userId" = u.id
       WHERE u.department = $1 AND COALESCE(u.role, 'user') != 'admin'
       GROUP BY u.id, u."fullName", u."username", u."department", u."profileImage", mp.points
       ORDER BY "totalPoints" DESC
       LIMIT 50`,
      [department]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Leaderboard error:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
