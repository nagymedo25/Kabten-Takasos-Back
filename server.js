const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

// Force Timezone
process.env.TZ = 'Africa/Cairo';

const { connectDB, pool } = require('./config/db');

// Connect to database
connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if not exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express.static(uploadsDir));

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/questions', require('./routes/questions'));
app.use('/api/results', require('./routes/results'));
app.use('/api/leaderboard', require('./routes/leaderboard'));
app.use('/api/ai-import', require('./routes/aiImport'));
app.use('/api/match', require('./routes/match'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'كابتن تخصص - السيرفر يعمل ✅', database: 'Neon PostgreSQL (Custom native)' });
});

// Socket.IO Match Handler
const { matchHandler } = require('./socketHandlers/matchHandler');
matchHandler(io);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'حدث خطأ في السيرفر' });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📚 كابتن تخصص - Kabten Takhasos`);
  console.log(`🐘 Database: Neon PostgreSQL (pg native)`);
  console.log('⚡ Socket.IO server is ready');
});

module.exports = { app, server };
