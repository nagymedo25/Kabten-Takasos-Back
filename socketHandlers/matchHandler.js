const { pool } = require('../config/db');

// In-memory state
const onlineUsers = new Map(); // userId -> socketId
const socketToUser = new Map(); // socketId -> userId
const pendingRequests = new Map(); // recipientId -> { from, difficulty, timestamp }
const activeMatches = new Map(); // matchRoomId -> matchState

function matchHandler(io) {
  io.on('connection', (socket) => {
    console.log('🔌 Match socket connected:', socket.id);

    // ─── User comes online ───
    socket.on('user:online', (userId) => {
      if (!userId) return;
      onlineUsers.set(userId, socket.id);
      socketToUser.set(socket.id, userId);
      broadcastOnlineUsers(io);

      // Check for pending match requests and deliver them
      const pendingRequest = pendingRequests.get(userId);
      if (pendingRequest) {
        socket.emit('match:requestReceived', {
          from: pendingRequest.from,
          difficulty: pendingRequest.difficulty,
        });
      }
    });

    // ─── Send match request ───
    socket.on('match:request', (data) => {
      const { toUserId, fromUser, difficulty } = data;
      if (!toUserId || !fromUser) return;

      // Store pending request (works for both online and offline recipients)
      pendingRequests.set(toUserId, {
        from: fromUser,
        difficulty,
        timestamp: Date.now(),
      });

      const recipientSocketId = onlineUsers.get(toUserId);
      if (recipientSocketId) {
        // Recipient is online — deliver immediately
        io.to(recipientSocketId).emit('match:requestReceived', {
          from: fromUser,
          difficulty,
        });
      }

      socket.emit('match:requestSent', { toUserId });
    });

    // ─── Accept match request ───
    socket.on('match:accept', async (data) => {
      const { fromUserId, acceptorUser } = data;
      if (!fromUserId || !acceptorUser) return;

      const acceptorId = acceptorUser._id;
      const request = pendingRequests.get(acceptorId);
      if (!request) {
        socket.emit('match:error', { message: 'لم يتم العثور على طلب المباراة' });
        return;
      }

      pendingRequests.delete(acceptorId);

      const senderSocketId = onlineUsers.get(fromUserId);
      if (!senderSocketId) {
        socket.emit('match:error', { message: 'اللاعب الذي أرسل الطلب غير متصل' });
        return;
      }

      try {
        // Fetch questions based on difficulty
        const department = request.from.department || acceptorUser.department;
        const difficulty = request.difficulty;

        // Determine question count
        let questionCount;
        const totalResult = await pool.query(
          'SELECT COUNT(*) FROM questions WHERE department = $1 AND "questionType" != \'essay\'',
          [department]
        );
        const totalQuestions = parseInt(totalResult.rows[0].count, 10);

        if (difficulty === 'easy') {
          questionCount = Math.min(20, totalQuestions);
        } else if (difficulty === 'medium') {
          questionCount = Math.min(Math.ceil(totalQuestions / 2), totalQuestions);
        } else {
          questionCount = totalQuestions;
        }

        if (questionCount === 0) {
          socket.emit('match:error', { message: 'لا توجد أسئلة متاحة لهذا القسم' });
          io.to(senderSocketId).emit('match:error', { message: 'لا توجد أسئلة متاحة لهذا القسم' });
          return;
        }

        // Fetch random questions (exclude essay type)
        const questionsResult = await pool.query(
          'SELECT id, "questionText", "questionType", options, "correctAnswer", "matchingPairs", department, topic, difficulty FROM questions WHERE department = $1 AND "questionType" != \'essay\' ORDER BY RANDOM() LIMIT $2',
          [department, questionCount]
        );

        const questions = questionsResult.rows.map(q => ({
          _id: q.id,
          questionText: q.questionText,
          questionType: q.questionType,
          options: q.options,
          correctAnswer: q.correctAnswer,
          matchingPairs: q.matchingPairs,
          department: q.department,
          topic: q.topic,
          difficulty: q.difficulty,
        }));

        // Create match room
        const roomId = `match_${fromUserId}_${acceptorId}_${Date.now()}`;
        const matchState = {
          roomId,
          player1: { id: fromUserId, user: request.from, answers: {}, correct: 0, finished: false, finishTime: null },
          player2: { id: acceptorId, user: acceptorUser, answers: {}, correct: 0, finished: false, finishTime: null },
          questions,
          difficulty,
          department,
          questionCount: questions.length,
          startTime: null,
          timeout: null,
        };

        activeMatches.set(roomId, matchState);

        // Join room
        const senderSocket = io.sockets.sockets.get(senderSocketId);
        if (senderSocket) senderSocket.join(roomId);
        socket.join(roomId);

        // Emit match start to both
        const matchStartData = {
          roomId,
          questions,
          difficulty,
          questionCount: questions.length,
          player1: { _id: request.from._id, fullName: request.from.fullName, profileImage: request.from.profileImage },
          player2: { _id: acceptorUser._id, fullName: acceptorUser.fullName, profileImage: acceptorUser.profileImage },
        };

        io.to(roomId).emit('match:start', matchStartData);

        // Set start time after countdown (6 seconds for countdown)
        matchState.startTime = Date.now() + 6000;

        // Set match timeout (max 30 minutes)
        matchState.timeout = setTimeout(() => {
          finishMatch(io, roomId);
        }, 30 * 60 * 1000 + 6000);

      } catch (error) {
        console.error('Match accept error:', error);
        socket.emit('match:error', { message: 'حدث خطأ أثناء بدء المباراة' });
      }
    });

    // ─── Decline match request ───
    socket.on('match:decline', (data) => {
      const { fromUserId, declinerId } = data;
      pendingRequests.delete(declinerId);

      const senderSocketId = onlineUsers.get(fromUserId);
      if (senderSocketId) {
        io.to(senderSocketId).emit('match:declined', { declinerId });
      }
    });

    // ─── Player submits an answer ───
    socket.on('match:answer', (data) => {
      const { roomId, playerId, questionId, answer, isCorrect } = data;
      const match = activeMatches.get(roomId);
      if (!match) return;

      const player = match.player1.id === playerId ? match.player1 : match.player2;
      player.answers[questionId] = { answer, isCorrect };
      if (isCorrect) player.correct++;

      // Broadcast progress to both players
      io.to(roomId).emit('match:progress', {
        player1: { id: match.player1.id, correct: match.player1.correct, total: Object.keys(match.player1.answers).length },
        player2: { id: match.player2.id, correct: match.player2.correct, total: Object.keys(match.player2.answers).length },
      });
    });

    // ─── Player finishes all questions ───
    socket.on('match:finish', (data) => {
      const { roomId, playerId, timeSpent } = data;
      const match = activeMatches.get(roomId);
      if (!match) return;

      const player = match.player1.id === playerId ? match.player1 : match.player2;
      player.finished = true;
      player.finishTime = timeSpent;

      // Notify other player
      io.to(roomId).emit('match:playerFinished', { playerId });

      // Check if both finished
      if (match.player1.finished && match.player2.finished) {
        finishMatch(io, roomId);
      }
    });

    // ─── Player Quits Mid-Match ───
    socket.on('match:quit', (data) => {
      const { roomId, playerId } = data;
      const match = activeMatches.get(roomId);
      if (!match) return;

      const quiter = match.player1.id === playerId ? match.player1 : match.player2;
      const otherPlayer = match.player1.id === playerId ? match.player2 : match.player1;

      if (!quiter.finished || !otherPlayer.finished) {
        quiter.finished = true;
        quiter.finishTime = 9999;
        quiter.correct = -1;

        otherPlayer.finished = true;
        otherPlayer.finishTime = 0;
        otherPlayer.correct = match.questionCount + 1; // absolute win

        io.to(roomId).emit('match:playerDisconnected', { playerId });
        finishMatch(io, roomId);
      }
    });

    // ─── Disconnect ───
    socket.on('disconnect', () => {
      const userId = socketToUser.get(socket.id);
      if (userId) {
        onlineUsers.delete(userId);
        socketToUser.delete(socket.id);
        broadcastOnlineUsers(io);

        // Handle mid-match disconnect
        for (const [roomId, match] of activeMatches.entries()) {
          if (match.player1.id === userId || match.player2.id === userId) {
            const disconnectedPlayer = match.player1.id === userId ? match.player1 : match.player2;
            const otherPlayer = match.player1.id === userId ? match.player2 : match.player1;

            if (!disconnectedPlayer.finished || !otherPlayer.finished) {
              disconnectedPlayer.finished = true;
              disconnectedPlayer.finishTime = 9999;
              disconnectedPlayer.correct = -1;

              otherPlayer.finished = true;
              otherPlayer.finishTime = 0;
              otherPlayer.correct = match.questionCount + 1; // absolute win

              io.to(roomId).emit('match:playerDisconnected', { playerId: userId });
              finishMatch(io, roomId);
            }
          }
        }
      }
    });
  });
}

async function finishMatch(io, roomId) {
  const match = activeMatches.get(roomId);
  if (!match) return;

  // Clear timeout
  if (match.timeout) clearTimeout(match.timeout);

  // Calculate winner
  const p1 = match.player1;
  const p2 = match.player2;

  let winnerId = null;
  if (p1.correct > p2.correct) {
    winnerId = p1.id;
  } else if (p2.correct > p1.correct) {
    winnerId = p2.id;
  } else {
    // Tie-breaker: shortest time
    if ((p1.finishTime || 9999) < (p2.finishTime || 9999)) {
      winnerId = p1.id;
    } else if ((p2.finishTime || 9999) < (p1.finishTime || 9999)) {
      winnerId = p2.id;
    }
    // If still tied, it's a draw (winnerId stays null)
  }

  // Calculate points
  let winnerPoints = 0;
  let loserPoints = 0;
  if (match.difficulty === 'easy') {
    winnerPoints = 1; loserPoints = -1;
  } else if (match.difficulty === 'medium') {
    winnerPoints = 2; loserPoints = -1;
  } else {
    winnerPoints = 3; loserPoints = -1;
  }

  const p1Points = winnerId === p1.id ? winnerPoints : (winnerId === null ? 0 : loserPoints);
  const p2Points = winnerId === p2.id ? winnerPoints : (winnerId === null ? 0 : loserPoints);

  try {
    // Save match to DB
    await pool.query(
      `INSERT INTO matches ("player1Id", "player2Id", difficulty, "questionCount", "player1Correct", "player2Correct", "player1Time", "player2Time", "winnerId", "player1Points", "player2Points", department)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
      [p1.id, p2.id, match.difficulty, match.questionCount, p1.correct, p2.correct, p1.finishTime || 0, p2.finishTime || 0, winnerId, p1Points, p2Points, match.department]
    );

    // Update match_points for both players (safe upsert)
    await safeUpsertPoints(p1.id, p1Points);
    await safeUpsertPoints(p2.id, p2Points);

  } catch (error) {
    console.error('Error saving match results:', error);
  }

  // Emit results
  const result = {
    roomId,
    winnerId,
    isDraw: winnerId === null,
    player1: {
      id: p1.id,
      fullName: p1.user.fullName,
      correct: p1.correct,
      total: match.questionCount,
      time: p1.finishTime || 0,
      points: p1Points,
    },
    player2: {
      id: p2.id,
      fullName: p2.user.fullName,
      correct: p2.correct,
      total: match.questionCount,
      time: p2.finishTime || 0,
      points: p2Points,
    },
    difficulty: match.difficulty,
  };

  io.to(roomId).emit('match:result', result);

  // Cleanup
  activeMatches.delete(roomId);
}

function broadcastOnlineUsers(io) {
  const onlineList = Array.from(onlineUsers.keys());
  io.emit('match:onlineUsers', onlineList);
}

// Safe upsert for match_points - works even without a UNIQUE constraint
async function safeUpsertPoints(userId, pointsDelta) {
  try {
    // Try to update existing row
    const updateResult = await pool.query(
      `UPDATE match_points SET points = points + $1 WHERE "userId" = $2`,
      [pointsDelta, userId]
    );
    // If no row was updated, insert a new one
    if (updateResult.rowCount === 0) {
      await pool.query(
        `INSERT INTO match_points ("userId", points) VALUES ($1, $2)`,
        [userId, pointsDelta]
      );
    }
  } catch (err) {
    console.error('safeUpsertPoints error:', err);
  }
}

// Insert a 0-point seed row for a new user (called from auth routes)
async function seedMatchPoints(userId) {
  try {
    // Only insert if no row exists yet
    const existing = await pool.query(
      `SELECT 1 FROM match_points WHERE "userId" = $1`,
      [userId]
    );
    if (existing.rowCount === 0) {
      await pool.query(
        `INSERT INTO match_points ("userId", points) VALUES ($1, 0)`,
        [userId]
      );
    }
  } catch (err) {
    console.error('seedMatchPoints error:', err);
  }
}

// Export for REST API access
function getOnlineUsers() {
  return Array.from(onlineUsers.keys());
}

module.exports = { matchHandler, getOnlineUsers, seedMatchPoints };
