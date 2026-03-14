const fs = require('fs');
const path = require('path');
const Groq = require('groq-sdk');
require('dotenv').config();
const { pool } = require('./config/db');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const promptTemplate = `You are an expert exam question parser. Analyze the text below and extract all questions into a structured JSON array.

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
      "difficulty": "medium",
      "explanation": "Extract any accompanying explanation/rationale, or leave empty if none."
    }
  ]
}

Text to parse:
`;

async function processChunk(textChunk, client) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: promptTemplate + textChunk }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.1,
      response_format: { type: 'json_object' }
    });

    const responseText = completion.choices[0]?.message?.content;
    const parsed = JSON.parse(responseText);
    const questions = parsed.questions || [];

    for (const q of questions) {
      await client.query(
        `INSERT INTO questions ("questionText", "questionType", options, "correctAnswer", explanation, "matchingPairs", department, topic, difficulty)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          q.questionText,
          q.questionType,
          JSON.stringify(q.options || []),
          q.correctAnswer || '',
          q.explanation || '',
          JSON.stringify(q.matchingPairs || []),
          'networks',
          q.topic || 'General',
          q.difficulty || 'medium'
        ]
      );
    }
    return questions.length;
  } catch (error) {
    console.error('Error processing chunk:', error.message);
    return 0;
  }
}

async function run() {
  let fileContent;
  try {
    fileContent = fs.readFileSync(path.join(__dirname, '../questions.txt'), 'utf8');
  } catch(e) {
    console.log('Error reading questions.txt:', e.message);
    return;
  }

  const lines = fileContent.split('\n');
  const CHUNK_SIZE = 120; // safe chunk of lines
  
  let client;
  try {
     client = await pool.connect();
     console.log('✅ Connected to database');
  } catch(e) {
     console.log('DB Connection error', e.message);
     return;
  }

  let totalInserted = 0;
  
  for (let i = 0; i < lines.length; i += CHUNK_SIZE) {
    const chunk = lines.slice(i, i + CHUNK_SIZE).join('\n');
    console.log(`⏳ Processing batch ${Math.floor(i / CHUNK_SIZE) + 1} of ${Math.ceil(lines.length / CHUNK_SIZE)}...`);
    
    const count = await processChunk(chunk, client);
    totalInserted += count;
    console.log(`✅ Inserted ${count} questions. Total so far: ${totalInserted}`);
    
    // Wait a bit to avoid rate limiting
    await new Promise(res => setTimeout(res, 2000));
  }

  console.log(`🏁 FINISHED! Total inserted: ${totalInserted}`);
  client.release();
  process.exit(0);
}

run();
