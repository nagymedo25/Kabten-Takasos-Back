require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test connection on startup
async function connectDB() {
  try {
    const client = await pool.connect();
    console.log('✅ PostgreSQL (Neon) Connected via pg');
    client.release();
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = { pool, connectDB };
