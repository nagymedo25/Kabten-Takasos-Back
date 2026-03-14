const express = require('express');
const { pool } = require('../config/db');
const { protect, adminOnly } = require('../middleware/auth');
const router = express.Router();

// @route   GET /api/questions - Get all questions (admin)
router.get('/', protect, adminOnly, async (req, res) => {
  try {
    const { department, type, topic } = req.query;
    let whereClauses = [];
    let values = [];
    let counter = 1;

    if (department) {
      whereClauses.push(`department = $${counter++}`);
      values.push(department);
    }
    if (type) {
      whereClauses.push(`"questionType" = $${counter++}`);
      values.push(type);
    }
    if (topic) {
      whereClauses.push(`topic ILIKE $${counter++}`);
      values.push(`%${topic}%`);
    }

    const whereStr = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
    
    const result = await pool.query(
      `SELECT * FROM questions ${whereStr} ORDER BY "createdAt" DESC`,
      values
    );

    // Map id to _id for frontend compatibility
    const mapped = result.rows.map(q => ({ ...q, _id: q.id }));
    res.json(mapped);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/questions/exam/:department - Get random exam questions
router.get('/exam/:department', protect, async (req, res) => {
  try {
    const { department } = req.params;
    const count = parseInt(req.query.count) || 10000; // Increased limit to fetch all questions

    const result = await pool.query(
      `SELECT * FROM questions WHERE department = $1 ORDER BY RANDOM() LIMIT $2`,
      [department, count]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'لا توجد أسئلة لهذا القسم' });
    }

    const mapped = result.rows.map(q => ({
      _id: q.id,
      questionText: q.questionText,
      questionType: q.questionType,
      options: q.options,
      correctAnswer: q.correctAnswer,
      matchingPairs: q.matchingPairs,
      department: q.department,
      topic: q.topic,
      difficulty: q.difficulty
    }));

    res.json(mapped);
  } catch (error) {
    console.error('Exam fetch error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/questions - Create question (admin)
router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const { questionText, questionType, options, correctAnswer, matchingPairs, department, topic, difficulty, explanation } = req.body;
    
    const result = await pool.query(
      `INSERT INTO questions ("questionText", "questionType", options, "correctAnswer", "matchingPairs", department, topic, difficulty, explanation)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [
        questionText, 
        questionType, 
        JSON.stringify(options || []), 
        correctAnswer || '', 
        JSON.stringify(matchingPairs || []), 
        department, 
        topic || 'General', 
        difficulty || 'medium',
        explanation || ''
      ]
    );

    const question = result.rows[0];
    res.status(201).json({ ...question, _id: question.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/questions/bulk - Bulk create questions (admin)
router.post('/bulk', protect, adminOnly, async (req, res) => {
  try {
    const { questions } = req.body;
    if (!questions || !Array.isArray(questions)) {
      return res.status(400).json({ message: 'يجب إرسال مصفوفة من الأسئلة' });
    }

    let count = 0;
    // For simplicity, we can do multiple inserts in a loop or a single large query. 
    // Using a loop for direct postgres without an ORM for bulk insert (while not perfectly atomic, suitable here)
    for (const q of questions) {
      await pool.query(
        `INSERT INTO questions ("questionText", "questionType", options, "correctAnswer", "matchingPairs", department, topic, difficulty, explanation)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          q.questionText, 
          q.questionType, 
          JSON.stringify(q.options || []), 
          q.correctAnswer || '', 
          JSON.stringify(q.matchingPairs || []), 
          q.department, 
          q.topic || 'General', 
          q.difficulty || 'medium',
          q.explanation || ''
        ]
      );
      count++;
    }

    res.status(201).json({ message: `تم إضافة ${count} سؤال بنجاح`, count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   DELETE /api/questions/bulk/all - Delete all questions (admin)
router.delete('/bulk/all', protect, adminOnly, async (req, res) => {
  try {
    const { department } = req.query;
    let result;
    if (department) {
      result = await pool.query('DELETE FROM questions WHERE department = $1 RETURNING id', [department]);
    } else {
      result = await pool.query('DELETE FROM questions RETURNING id');
    }
    res.json({ message: 'تم حذف جميع الأسئلة بنجاح', count: result.rowCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/questions/:id - Update question (admin)
router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const fields = ['questionText', 'questionType', 'options', 'correctAnswer', 'matchingPairs', 'department', 'topic', 'difficulty', 'explanation'];
    let updateFields = [];
    let values = [];
    let counter = 1;

    fields.forEach(f => {
      if (req.body[f] !== undefined) {
        updateFields.push(`"${f}" = $${counter++}`);
        let val = req.body[f];
        if (f === 'options' || f === 'matchingPairs') val = JSON.stringify(val);
        values.push(val);
      }
    });

    if (updateFields.length === 0) {
      return res.json({ message: 'لا توجد حقول للتحديث' });
    }

    values.push(req.params.id);
    const result = await pool.query(
      `UPDATE questions SET ${updateFields.join(', ')} WHERE id = $${counter} RETURNING *`,
      values
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'السؤال غير موجود' });
    }

    const question = result.rows[0];
    res.json({ ...question, _id: question.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   DELETE /api/questions/:id - Delete question (admin)
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM questions WHERE id = $1 RETURNING id', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'السؤال غير موجود' });
    }
    res.json({ message: 'تم حذف السؤال بنجاح' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
