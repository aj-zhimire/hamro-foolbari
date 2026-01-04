import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize OpenAI only if key is set (allow running without a key)
const OPENAI_KEY = process.env.OPENAI_API_KEY;
let openai = null;
if (OPENAI_KEY && OPENAI_KEY !== 'your_openai_api_key_here') {
  openai = new OpenAI({ apiKey: OPENAI_KEY });
} else {
  console.warn('OpenAI API key not configured — running in local fallback mode.');
}

// Middleware
app.use(cors());
app.use(express.json());

// Load knowledge base
let knowledgeBase = {};
try {
  const kbPath = path.join(__dirname, '../data/knowledge-base.json');
  if (fs.existsSync(kbPath)) {
    knowledgeBase = JSON.parse(fs.readFileSync(kbPath, 'utf8'));
  }
} catch (error) {
  console.warn('Knowledge base not loaded:', error.message);
}

// System prompt for ChatGPT
const getSystemPrompt = () => `You are an AI assistant for Hamro Foolbari, Sajha Foolbari Gyan Kunja - a non-profit school system in Ramechhap, Nepal.

PROJECT OVERVIEW:
Hamro Foolbari, Sajha Foolbari Gyan Kunja is committed to education through doing, civic awareness, and community ownership. The initiative begins with a proof-of-concept school in Ramechhap, Nepal, designed for disciplined, transparent replication across underserved regions.

CORE PRINCIPLES:
1. Learning by doing - Hands-on experiential education
2. Local teachers and governance - Community-led management
3. Civic education as a parallel track - Building responsible citizens
4. Transparency by default - Open documentation of everything
5. No religious or political affiliation - Neutral, inclusive education

KEY COMPONENTS:
- Early childhood through grade 8 curriculum
- Civic education framework integrated throughout
- Pedagogy focused on learning by doing
- Local teacher training programs
- Community engagement strategies
- Child safeguarding policies
- Transparent governance and board structure
- Site feasibility and operations planning

KNOWLEDGE BASE:
${knowledgeBase.pdfContent ? knowledgeBase.pdfContent.substring(0, 2000) : 'Documentation available in repository'}

Your role:
- Answer questions accurately based on the project documentation
- Explain the educational philosophy and approach
- Help people understand how to support or replicate the model
- Be concise, warm, and culturally appropriate for Nepal context
- Start with "Namaste" when appropriate
- Cite specific documents when answering
- Be transparent about what you know and don't know

Always maintain the spirit of transparency, community ownership, and practical education.`;

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // If OpenAI is configured, call the API. Otherwise, return a local fallback reply.
    if (openai) {
      const messages = [
        { role: 'system', content: getSystemPrompt() },
        ...history.slice(-10),
        { role: 'user', content: message }
      ];

      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: messages,
        temperature: 0.7,
        max_tokens: 800,
      });

      return res.json({
        message: completion.choices[0].message.content,
        usage: completion.usage
      });
    }

    // Local fallback (basic search / canned response)
    const createLocalReply = (query) => {
      const q = (query || '').toLowerCase().trim();
      if (Object.keys(knowledgeBase).length > 0) {
        const hay = JSON.stringify(knowledgeBase).toLowerCase();
        const idx = hay.indexOf(q);
        if (q && idx !== -1) {
          const start = Math.max(0, idx - 200);
          const excerpt = hay.substring(start, Math.min(hay.length, idx + 600));
          return `Namaste — (local) I found a passage in the project documents that may help:\n\n${excerpt.replace(/\s+/g, ' ')}\n\n(Enable an OpenAI API key to get richer conversational answers.)`;
        }
        return `Namaste — OpenAI is not configured. I can provide basic info from local docs but couldn't find a direct match for "${query}". Try a different question or enable an API key for AI-powered answers.`;
      }
      return 'Namaste — OpenAI API key is not configured and no local knowledge base is available. To enable conversational AI, set OPENAI_API_KEY in .env or export it in your shell.';
    };

    return res.json({ message: createLocalReply(message), usage: null });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      error: 'Failed to process chat request',
      message: error.message 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    knowledgeBaseLoaded: Object.keys(knowledgeBase).length > 0
  });
});

// Knowledge base info
app.get('/api/knowledge-base', (req, res) => {
  res.json({
    loaded: Object.keys(knowledgeBase).length > 0,
    lastUpdated: knowledgeBase.lastUpdated || null,
    sections: Object.keys(knowledgeBase)
  });
});

app.listen(PORT, () => {
  console.log(`🌱 Hamro Foolbari API server running on http://localhost:${PORT}`);
  console.log(`📚 Knowledge base loaded: ${Object.keys(knowledgeBase).length > 0 ? 'Yes' : 'No'}`);
  console.log(`🔑 OpenAI API configured: ${process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_api_key_here' ? 'Yes' : 'No'}`);
});
