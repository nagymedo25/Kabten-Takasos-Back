require('dotenv').config();
const { pool } = require('./config/db');

async function run() {
  try {
    await pool.query('ALTER TABLE exam_results ADD COLUMN IF NOT EXISTS "timeSpent" INT DEFAULT 0');
    console.log('Success');
  } catch(e) {
    if (e.message.includes('already exists')) {
       console.log('Already exists');
    } else {
       console.error(e);
    }
  } finally {
    process.exit(0);
  }
}
run();
