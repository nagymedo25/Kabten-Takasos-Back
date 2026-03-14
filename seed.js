const { pool } = require('./config/db');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const createTables = async (client) => {
  await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      "fullName" VARCHAR(255) NOT NULL,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      department VARCHAR(100),
      "profileImage" VARCHAR(255) DEFAULT '',
      role VARCHAR(50) DEFAULT 'student',
      onboarded BOOLEAN DEFAULT false,
      "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS questions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      "questionText" TEXT NOT NULL,
      "questionType" VARCHAR(100) NOT NULL,
      options JSONB DEFAULT '[]'::jsonb,
      "correctAnswer" TEXT DEFAULT '',
      explanation TEXT DEFAULT '',
      "matchingPairs" JSONB DEFAULT '[]'::jsonb,
      department VARCHAR(100) NOT NULL,
      topic VARCHAR(255) DEFAULT 'General',
      difficulty VARCHAR(50) DEFAULT 'medium',
      "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS exam_results (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      "userId" UUID REFERENCES users(id) ON DELETE CASCADE,
      department VARCHAR(100) NOT NULL,
      score INTEGER NOT NULL,
      "totalQuestions" INTEGER NOT NULL,
      "correctAnswers" INTEGER NOT NULL,
      "wrongAnswers" INTEGER NOT NULL,
      percentage INTEGER NOT NULL,
      "topicBreakdown" JSONB DEFAULT '[]'::jsonb,
      answers JSONB DEFAULT '[]'::jsonb,
      "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Match system tables
  await client.query(`
    CREATE TABLE IF NOT EXISTS matches (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      "player1Id" UUID REFERENCES users(id) ON DELETE CASCADE,
      "player2Id" UUID REFERENCES users(id) ON DELETE CASCADE,
      difficulty VARCHAR(20) NOT NULL,
      "questionCount" INTEGER NOT NULL,
      "player1Correct" INTEGER DEFAULT 0,
      "player2Correct" INTEGER DEFAULT 0,
      "player1Time" INTEGER DEFAULT 0,
      "player2Time" INTEGER DEFAULT 0,
      "winnerId" UUID,
      "player1Points" INTEGER DEFAULT 0,
      "player2Points" INTEGER DEFAULT 0,
      department VARCHAR(100) NOT NULL,
      "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS match_points (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      "userId" UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
      points INTEGER DEFAULT 0
    );
  `);
};

const seedDB = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Connected to Neon PostgreSQL');

    console.log('⏳ Creating tables if not exist...');
    await createTables(client);
    console.log('✅ Tables are ready');

    // Create admin user
    const adminCheck = await client.query('SELECT * FROM users WHERE username = $1', ['admin']);
    if (adminCheck.rows.length === 0) {
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash('admin123', salt);

      await client.query(
        `INSERT INTO users ("fullName", username, password, role, department, onboarded)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        ['مدير النظام', 'admin', hashedPassword, 'admin', 'programming', true]
      );
      console.log('✅ Admin user created: admin / admin123');
    } else {
      console.log('ℹ Admin user already exists');
    }

    // Create sample questions
    const qCountResult = await client.query('SELECT COUNT(*) FROM questions');
    const qCount = parseInt(qCountResult.rows[0].count, 10);
    if (qCount === 0) {
      const sampleQuestions = [
        {
          questionText: 'What does OOP stand for?',
          questionType: 'multiple_choice',
          options: ['Object Oriented Programming', 'Open Operating Protocol', 'Output Oriented Processing', 'Operator Overloading Principle'],
          correctAnswer: 'Object Oriented Programming',
          department: 'programming',
          topic: 'OOP',
          difficulty: 'easy'
        },
        {
          questionText: 'HTML is a programming language.',
          questionType: 'true_false',
          options: ['True', 'False'],
          correctAnswer: 'False',
          department: 'programming',
          topic: 'Web',
          difficulty: 'easy'
        },
        {
          questionText: 'The keyword used to create a class in Java is ____.',
          questionType: 'fill_blank',
          options: [],
          correctAnswer: 'class',
          department: 'programming',
          topic: 'Java',
          difficulty: 'easy'
        },
        {
          questionText: 'What is the default subnet mask for a Class C network?',
          questionType: 'multiple_choice',
          options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.128'],
          correctAnswer: '255.255.255.0',
          department: 'networks',
          topic: 'Subnetting',
          difficulty: 'medium'
        },
        {
          questionText: 'TCP is a connection-oriented protocol.',
          questionType: 'true_false',
          options: ['True', 'False'],
          correctAnswer: 'True',
          department: 'networks',
          topic: 'TCP/IP',
          difficulty: 'easy'
        },
        {
          questionText: 'The OSI model has ____ layers.',
          questionType: 'fill_blank',
          options: [],
          correctAnswer: '7',
          department: 'networks',
          topic: 'OSI Model',
          difficulty: 'easy'
        },
        {
          questionText: 'What does AM stand for in signal modulation?',
          questionType: 'multiple_choice',
          options: ['Amplitude Modulation', 'Analog Modulation', 'Audio Multiplexing', 'Adaptive Modulation'],
          correctAnswer: 'Amplitude Modulation',
          department: 'communications',
          topic: 'Modulation',
          difficulty: 'easy'
        },
        {
          questionText: 'Fiber optic cables use light signals for data transmission.',
          questionType: 'true_false',
          options: ['True', 'False'],
          correctAnswer: 'True',
          department: 'communications',
          topic: 'Transmission',
          difficulty: 'easy'
        },
        {
          questionText: 'The unit of frequency is ____.',
          questionType: 'fill_blank',
          options: [],
          correctAnswer: 'Hertz',
          department: 'communications',
          topic: 'Signals',
          difficulty: 'easy'
        },
        {
          questionText: 'Which SQL command is used to retrieve data from a database?',
          questionType: 'multiple_choice',
          options: ['GET', 'SELECT', 'RETRIEVE', 'FETCH'],
          correctAnswer: 'SELECT',
          department: 'programming',
          topic: 'Database',
          difficulty: 'easy'
        }
      ];

      for (let q of sampleQuestions) {
        await client.query(
          `INSERT INTO questions ("questionText", "questionType", options, "correctAnswer", department, topic, difficulty)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [q.questionText, q.questionType, JSON.stringify(q.options), q.correctAnswer, q.department, q.topic, q.difficulty]
        );
      }
      console.log(`✅ ${sampleQuestions.length} sample questions created`);
    } else {
      console.log(`ℹ ${qCount} questions already exist`);
    }

    console.log('\n🎉 Seed complete!');
    console.log('Admin Login: admin@kabten.com / admin123');
    client.release();
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
};

seedDB();
