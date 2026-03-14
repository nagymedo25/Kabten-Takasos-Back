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
        er."userId",
        u."fullName",
        u."username",
        u."department",
        u."profileImage",
        COALESCE(SUM(FLOOR(er.percentage / 10) + CASE WHEN er.percentage = 100 THEN 3 ELSE 0 END), 0)::int 
        + COALESCE((SELECT points FROM match_points mp WHERE mp."userId" = er."userId"), 0) as "totalPoints",
        COUNT(er.id)::int as "totalExams",
        MAX(er."createdAt") as "lastExam"
       FROM exam_results er
       JOIN users u ON er."userId" = u.id
       WHERE er.department = $1
       GROUP BY er."userId", u."fullName", u."username", u."department", u."profileImage"
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
