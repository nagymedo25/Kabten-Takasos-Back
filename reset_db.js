const { pool } = require('./config/db');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const resetDB = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Connected to Neon PostgreSQL');

    console.log('⏳ Wiping database...');
    // Drop all data but keep tables
    await client.query('TRUNCATE TABLE users, questions, exam_results, matches, match_points CASCADE;');
    console.log('✅ All data truncated successfully');

    // Create admin user
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash('123456654321qwertT', salt);

    await client.query(
      `INSERT INTO users ("fullName", username, password, role, department, onboarded)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      ['مدير النظام', 'nagyAdmin', hashedPassword, 'admin', 'programming', true]
    );
    console.log('✅ Admin user created: nagyAdmin');

    client.release();
    console.log('🏁 Database reset complete');
    process.exit(0);
  } catch (error) {
    console.error('❌ Connection or seed error:', error);
    process.exit(1);
  }
};

resetDB();
