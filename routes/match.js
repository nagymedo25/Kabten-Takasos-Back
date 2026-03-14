const express = require('express');
const { pool } = require('../config/db');
const { protect, adminOnly } = require('../middleware/auth');
const { getOnlineUsers } = require('../socketHandlers/matchHandler');
const router = express.Router();

// @route   GET /api/match/friends - Get users in same department with online status
router.get('/friends', protect, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, "fullName", username, department, "profileImage" 
       FROM users 
       WHERE department = $1 AND id != $2 AND role = 'student'
       ORDER BY "fullName"`,
      [req.user.department, req.user.id]
    );

    const onlineList = getOnlineUsers();
    const friends = result.rows.map(u => ({
      ...u,
      _id: u.id,
      isOnline: onlineList.includes(u.id),
    }));

    res.json(friends);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/match/history - Get match history for current user
router.get('/history', protect, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT m.*, 
              u1."fullName" as "player1Name", u1."profileImage" as "player1Image",
              u2."fullName" as "player2Name", u2."profileImage" as "player2Image"
       FROM matches m
       JOIN users u1 ON m."player1Id" = u1.id
       JOIN users u2 ON m."player2Id" = u2.id
       WHERE m."player1Id" = $1 OR m."player2Id" = $1
       ORDER BY m."createdAt" DESC
       LIMIT 20`,
      [req.user.id]
    );

    const mapped = result.rows.map(r => ({ ...r, _id: r.id }));
    res.json(mapped);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/match/stats - Get user match stats
router.get('/stats', protect, async (req, res) => {
  try {
    const userId = req.user.id;

    const [pointsResult, winsResult, lossesResult, totalResult] = await Promise.all([
      pool.query('SELECT points FROM match_points WHERE "userId" = $1', [userId]),
      pool.query('SELECT COUNT(*) FROM matches WHERE "winnerId" = $1', [userId]),
      pool.query('SELECT COUNT(*) FROM matches WHERE ("player1Id" = $1 OR "player2Id" = $1) AND "winnerId" IS NOT NULL AND "winnerId" != $1', [userId]),
      pool.query('SELECT COUNT(*) FROM matches WHERE "player1Id" = $1 OR "player2Id" = $1', [userId]),
    ]);

    res.json({
      points: pointsResult.rows[0]?.points || 0,
      wins: parseInt(winsResult.rows[0].count, 10),
      losses: parseInt(lossesResult.rows[0].count, 10),
      totalMatches: parseInt(totalResult.rows[0].count, 10),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/match/admin-stats - Admin match statistics
router.get('/admin-stats', protect, adminOnly, async (req, res) => {
  try {
    const [totalResult, recentResult, topPlayersResult, difficultyResult] = await Promise.all([
      pool.query('SELECT COUNT(*) FROM matches'),
      pool.query(
        `SELECT m.*, 
                u1."fullName" as "player1Name", 
                u2."fullName" as "player2Name",
                uw."fullName" as "winnerName"
         FROM matches m
         JOIN users u1 ON m."player1Id" = u1.id
         JOIN users u2 ON m."player2Id" = u2.id
         LEFT JOIN users uw ON m."winnerId" = uw.id
         ORDER BY m."createdAt" DESC
         LIMIT 50`
      ),
      pool.query(
        `SELECT u."fullName", u.username, mp.points,
                (SELECT COUNT(*) FROM matches WHERE "winnerId" = u.id)::int as wins,
                (SELECT COUNT(*) FROM matches WHERE ("player1Id" = u.id OR "player2Id" = u.id))::int as "totalMatches"
         FROM match_points mp
         JOIN users u ON mp."userId" = u.id
         ORDER BY mp.points DESC
         LIMIT 20`
      ),
      pool.query(
        `SELECT difficulty, COUNT(*)::int as count FROM matches GROUP BY difficulty`
      ),
    ]);

    res.json({
      totalMatches: parseInt(totalResult.rows[0].count, 10),
      recentMatches: recentResult.rows.map(r => ({ ...r, _id: r.id })),
      topPlayers: topPlayersResult.rows,
      difficultyBreakdown: difficultyResult.rows,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/match/admin/backfill-points - Backfill match_points for all users + recalculate from matches table
router.post('/admin/backfill-points', protect, adminOnly, async (req, res) => {
  try {
    // Step 1: Seed 0-point rows for all users who are missing from match_points
    const seedResult = await pool.query(
      `INSERT INTO match_points ("userId", points)
       SELECT u.id, 0
       FROM users u
       WHERE u.role = 'student'
         AND NOT EXISTS (SELECT 1 FROM match_points mp WHERE mp."userId" = u.id)`
    );

    // Step 2: Recalculate actual match points from the matches table for all users
    // This rebuilds points from historical match data
    const recalcResult = await pool.query(
      `UPDATE match_points mp
       SET points = sub.total_points
       FROM (
         SELECT u.id as uid,
           COALESCE(SUM(
             CASE WHEN m."player1Id" = u.id THEN m."player1Points"
                  WHEN m."player2Id" = u.id THEN m."player2Points"
                  ELSE 0 END
           ), 0)::int as total_points
         FROM users u
         LEFT JOIN matches m ON m."player1Id" = u.id OR m."player2Id" = u.id
         WHERE u.role = 'student'
         GROUP BY u.id
       ) sub
       WHERE mp."userId" = sub.uid`
    );

    res.json({
      message: 'تم بنجاح',
      seeded: seedResult.rowCount,
      recalculated: recalcResult.rowCount,
    });
  } catch (error) {
    console.error('Backfill error:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
