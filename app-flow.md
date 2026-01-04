# Application Flow — Hamro Foolbari

## Purpose
This document describes how the site and integrated chat assistant work together: frontend, backend, and knowledge base flow.

## High-level architecture
- Frontend: React (Vite) serves the SPA during development on port 3000. Entry: src/main.jsx. Routing: src/App.jsx.
- Backend API: Express server runs on port 3001 and exposes:
  - POST /api/chat — chat endpoint (uses OpenAI when configured; local fallback otherwise)
  - GET /api/health — basic health check
  - GET /api/knowledge-base — knowledge base metadata
  Location: server/index.js.
- PDF → knowledge base: scripts/extract-pdf.js reads the repo PDF and writes data/knowledge-base.json.
- Dev proxy: Vite proxies /api to the backend (see vite.config.js) so the frontend can call /api/* at runtime without CORS issues.

## User interaction flow (chat)
1. User opens the site at http://localhost:3000 (Vite).
2. User opens the floating chat UI (src/components/ChatWidget.jsx) and sends a message.
3. Frontend POSTs { message, history } to /api/chat.
4. Backend server/index.js:
   - If OPENAI_API_KEY is set in .env (or env), it forwards the conversation to OpenAI and returns the AI reply.
   - If not set, it performs a basic local search of data/knowledge-base.json and returns a fallback response.
5. Frontend receives the JSON { message } and displays it in the chat widget.

## Developer run & test steps
- Install:
  npm install
- Generate knowledge base (optional / required if you want richer local replies):
  npm run extract-pdf
- Run dev (frontend + backend):
  npm run dev

## Important files & settings
- Frontend entry: src/main.jsx and src/App.jsx
- Chat UI: src/components/ChatWidget.jsx
- Server: server/index.js
- PDF extractor: scripts/extract-pdf.js
- Vite config / proxy: vite.config.js
- Environment: .env — OPENAI_API_KEY, PORT, VITE_API_URL
- Generated KB: data/knowledge-base.json

