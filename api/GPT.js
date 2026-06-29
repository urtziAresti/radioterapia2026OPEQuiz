const Groq = require('groq-sdk');

// 🔐 API KEY desde variables de entorno (NO en código)
const client = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// CORS
function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

module.exports = async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  try {
    if (req.method !== 'POST') {
      return res.status(405).json({
        ok: false,
        error: 'Method not allowed'
      });
    }

    const body = typeof req.body === 'string'
      ? JSON.parse(req.body)
      : req.body;

    const { question, history = [] } = body || {};

    if (!question) {
      return res.status(400).json({
        ok: false,
        error: 'Falta question'
      });
    }

    // 🧠 construir conversación
    const messages = [
      ...history.map(h => ({
        role: h.role || 'user',
        content: h.content || h
      })),
      {
        role: 'user',
        content: question
      }
    ];

    const response = await client.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages
    });

    const answer =
      response.choices?.[0]?.message?.content ||
      'Sin respuesta';

    return res.status(200).json({
      ok: true,
      answer
    });

  } catch (err) {
    console.error(err);

    setCors(res);

    return res.status(500).json({
      ok: false,
      error: 'Error Groq',
      details: err.message
    });
  }
};