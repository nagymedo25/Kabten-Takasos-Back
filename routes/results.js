const express = require('express');
const { pool } = require('../config/db');
const { protect, adminOnly } = require('../middleware/auth');
const router = express.Router();

// @route   POST /api/results - Submit exam result
router.post('/', protect, async (req, res) => {
  try {
    const { department, score, totalQuestions, correctAnswers, wrongAnswers, percentage, timeSpent, topicBreakdown, answers } = req.body;

    const result = await pool.query(
      `INSERT INTO exam_results ("userId", department, score, "totalQuestions", "correctAnswers", "wrongAnswers", percentage, "timeSpent", "topicBreakdown", answers)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [req.user.id, department, score, totalQuestions, correctAnswers, wrongAnswers, percentage, timeSpent || 0, JSON.stringify(topicBreakdown || []), JSON.stringify(answers || [])]
    );

    const examResult = result.rows[0];
    res.status(201).json({ ...examResult, _id: examResult.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/results/my - Get my results
router.get('/my', protect, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM exam_results WHERE "userId" = $1 ORDER BY "createdAt" DESC LIMIT 20`,
      [req.user.id]
    );

    const mapped = result.rows.map(r => ({ ...r, _id: r.id }));
    res.json(mapped);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/results - Get all results (admin)
router.get('/', protect, adminOnly, async (req, res) => {
  try {
    // Join users to get user details
    const result = await pool.query(
      `SELECT r.*, u."fullName", u.username, u.department as "userDepartment"
       FROM exam_results r 
       JOIN users u ON r."userId" = u.id 
       ORDER BY r."createdAt" DESC`
    );

    const mapped = result.rows.map(r => {
      const { fullName, username, userDepartment, ...rest } = r;
      return {
        ...rest,
        _id: r.id,
        user: { fullName, username, department: userDepartment }
      };
    });
    res.json(mapped);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/results/user/:id - Get results for a specific user (admin)
router.get('/user/:id', protect, adminOnly, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM exam_results WHERE "userId" = $1 ORDER BY "createdAt" DESC`,
      [req.params.id]
    );

    const mapped = result.rows.map(r => ({ ...r, _id: r.id }));
    res.json(mapped);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
