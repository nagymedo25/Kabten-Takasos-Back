const express = require('express');
const Groq = require('groq-sdk');
const { protect, adminOnly } = require('../middleware/auth');
const router = express.Router();

// @route   POST /api/ai-import/parse - Parse questions with AI
router.post('/parse', protect, adminOnly, async (req, res) => {
  try {
    const { text, department } = req.body;

    if (!text || !department) {
      return res.status(400).json({ message: 'النص والقسم مطلوبان' });
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const prompt = `You are an expert exam question parser. Analyze the text below and extract all questions into a structured JSON array.

Strict Question Type Detection Rules:

General Exclusion & Topic Rules:
- DO NOT treat chapter titles, headings, or lines ending with/containing "TPK" (e.g. "The basics of agile testing And API testing TPK 13") as standalone questions.
- NEVER create a question out of a heading. Instead, extract these headings and use them as the "topic" field for the questions that follow them.
- Only extract actual questions that have answers.

1. Complete Questions / Fill in the blank -> Convert to "multiple_choice":
- Detected by: text containing "_________" or the prompt "Complete the question".
- Action: Treat the correct word as the "correctAnswer". Generate 3 plausible but incorrect options. Mix them with the correct answer to form a 4-item "options" array.
- Set "questionType" to "multiple_choice".
- DO NOT use "fill_blank" type. All such questions MUST be converted to multiple choice.

2. Short Answer / Essay Questions -> Convert to "multiple_choice":
- Detected by: "Question" followed by "Answer" pairs without blanks, options, or true/false.
- Action: Make the correct text the "correctAnswer". Generate 3 plausible but incorrect options. Mix them with the correct answer to form a 4-item "options" array.
- Set "questionType" to "multiple_choice".
- DO NOT use "essay" type. All textual or short answer questions MUST be converted to multiple choice.

3. Multiple Choice ("multiple_choice"):
- Detected by: Options like a), b), c), d).
- Structure: Extract all options into the "options" array. Put the correct text in "correctAnswer".
- Set "questionType" to "multiple_choice".

4. True / False ("true_false"):
- Detected by: "True" or "False" alongside statements or prompt "Put True in front of the correct statement".
- Structure: Store "True" or "False" in "correctAnswer".
- Set "questionType" to "true_false" and options to ["True", "False"].

5. Matching Questions ("matching") - CRITICAL RULE:
- Detected by: Prompt like "Match each term with its correct definition" and a table with "Term", "Definition", and mappings like "215→B".
- DO NOT create a separate question for each row. You MUST aggregate all rows under this header into a SINGLE question of type "matching".
- You must deeply resolve the arrows. For example, if Term 215 is "Testing" and the Answer is "215→B", and Definition B is "Detecting defects", then the pair is {"left": "Testing", "right": "Detecting defects"}.
- Set "questionText" to the main header (e.g. "Match each term with its correct definition").
- Set "questionType" to "matching".
- Construct the "matchingPairs" array strictly as: [{"left": "Exact term text", "right": "Exact definition text"}].

JSON Structure Required:
{
  "questions": [
    {
      "questionText": "Question text itself",
      "questionType": "multiple_choice|true_false|matching",
      "options": ["A", "B", "C", "D"], // Empty if not multiple choice
      "correctAnswer": "Exact correct answer text",
      "matchingPairs": [{"left": "Term text", "right": "Resolved Definition text"}], // Only for matching
      "topic": "Detected topic or general category",
      "difficulty": "easy|medium|hard",
      "explanation": "Extract any accompanying explanation/rationale, or leave empty if none."
    }
  ]
}

Text to parse:
${text}`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.1-8b-instant',
      temperature: 0.1,
      max_tokens: 8000,
      response_format: { type: 'json_object' }
    });

    const responseText = completion.choices[0]?.message?.content;

    let parsed;
    try {
      parsed = JSON.parse(responseText);
    } catch (parseErr) {
      return res.status(500).json({ message: 'فشل في تحليل استجابة الذكاء الاصطناعي', raw: responseText });
    }

    // Add department to each question and filter out broken ones
    const questions = (parsed.questions || [])
      .map(q => ({ ...q, department }))
      .filter(q => {
        if (!q.questionText || !String(q.questionText).trim()) return false;
        if (q.questionType === 'matching') {
          return Array.isArray(q.matchingPairs) && q.matchingPairs.length >= 2;
        }
        if (!q.correctAnswer || !String(q.correctAnswer).trim()) return false;
        if (q.questionType === 'multiple_choice') {
          if (!Array.isArray(q.options) || q.options.length < 2) return false;
          if (!q.options.includes(q.correctAnswer)) return false;
        }
        return true;
      });

    res.json({ questions, count: questions.length });
  } catch (error) {
    console.error('AI Import Error:', error);
    res.status(500).json({ message: 'خطأ في استيراد الأسئلة بالذكاء الاصطناعي', error: error.message });
  }
});

module.exports = router;
