# Hamro Foolbari Website - Setup & Development Guide

## 🌱 Modern Web Application with AI Integration

This is a professional, modern web application built with industry-standard tools and best practices.

### Tech Stack

- **Frontend:** React 18 + Vite (fast, modern build tool)
- **Styling:** Tailwind CSS (utility-first CSS framework)
- **Backend:** Express.js (Node.js API server)
- **AI Integration:** OpenAI GPT-4 (ChatGPT assistant)
- **PDF Processing:** pdf-parse (knowledge base extraction)
- **Routing:** React Router v6

## 📋 Prerequisites

- Node.js 18+ and npm
- OpenAI API key (get from https://platform.openai.com)
- Git

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file and add your OpenAI API key:

```bash
cp .env.example .env
```

Edit `.env` and add your OpenAI API key:

```
OPENAI_API_KEY=sk-your-actual-api-key-here
```

### 3. Extract PDF Knowledge Base

Run this once to extract content from your PDF and create the knowledge base:

```bash
npm run extract-pdf
```

This will:
- Read `Hamro_Foolbari_Project_Code_v1.pdf`
- Extract all text content
- Create `data/knowledge-base.json`
- Save readable text to `data/project-content.txt`

### 4. Start Development Servers

```bash
npm run dev
```

This starts both servers concurrently:
- Frontend (React + Vite): http://localhost:3000
- Backend API (Express): http://localhost:3001

## 🛠️ Available Scripts

```bash
npm run dev          # Start both frontend and backend
npm run client       # Start only frontend (Vite)
npm run server       # Start only backend (Express)
npm run build        # Build for production
npm run preview      # Preview production build
npm run extract-pdf  # Extract PDF content to knowledge base
```

## 📁 Project Structure

```
hamro-foolbari/
├── src/                      # React frontend source
│   ├── components/           # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ChatWidget.jsx   # AI chat assistant
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Mission.jsx
│   │   ├── Curriculum.jsx
│   │   ├── Governance.jsx
│   │   ├── WhyRamechhap.jsx
│   │   ├── Progress.jsx
│   │   └── Transparency.jsx
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── server/                   # Backend API
│   └── index.js             # Express server with OpenAI
├── scripts/                  # Utility scripts
│   └── extract-pdf.js       # PDF knowledge extraction
├── data/                     # Generated data
│   ├── knowledge-base.json  # AI assistant knowledge
│   └── project-content.txt  # Readable PDF content
├── curriculum/              # Curriculum documentation
├── governance/              # Governance documents
├── operations/              # Operations documentation
├── planning/                # Planning documents
├── transparency/            # Transparency reports
├── website/                 # Legacy HTML files (archived)
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Project dependencies

```

## 🎨 Key Features

### 1. Modern, Responsive UI
- Clean, professional design with Tailwind CSS
- Mobile-first responsive layout
- Smooth animations and transitions
- Accessible navigation

### 2. AI Chat Assistant
- Powered by OpenAI GPT-4
- Context-aware about Hamro Foolbari project
- Loads knowledge from PDF documentation
- Floating chat widget on all pages
- Quick question buttons
- Conversation history

### 3. Complete Content Pages
- **Home:** Overview and core principles
- **Mission:** Mission, vision, and values
- **Curriculum:** Educational framework
- **Governance:** Structure and policies
- **Why Ramechhap:** Location rationale
- **Progress:** Project timeline and updates
- **Transparency:** Reporting standards

### 4. Backend API
- Express.js server
- OpenAI integration
- PDF knowledge base loading
- CORS enabled for development
- Health check endpoint
- Error handling

## 🔧 Development

### Frontend Development

The frontend uses React with Vite for fast development:

- Hot Module Replacement (HMR) - instant updates
- Fast refresh - preserves component state
- Optimized builds
- Modern ES modules

Edit files in `src/` and see changes instantly.

### Backend Development

The backend uses Express with nodemon for auto-restart:

- Edit `server/index.js` and server restarts automatically
- API endpoints:
  - `POST /api/chat` - Chat with AI assistant
  - `GET /api/health` - Health check
  - `GET /api/knowledge-base` - Knowledge base info

### Styling

Tailwind CSS utility classes for styling:

```jsx
<div className="bg-primary-500 text-white p-8 rounded-lg">
  // Your content
</div>
```

Custom colors defined in `tailwind.config.js`:
- `primary-*`: Green shades for brand color
- Responsive: `md:`, `lg:` prefixes
- States: `hover:`, `focus:` prefixes

## 🌐 Production Build

```bash
npm run build
```

Creates optimized production build in `dist/` folder:
- Minified JavaScript
- Optimized CSS
- Asset optimization
- Source maps

Preview production build:

```bash
npm run preview
```

## 🤖 AI Assistant Configuration

The ChatGPT assistant is configured with:

1. **System Prompt:** Understands Hamro Foolbari's mission and principles
2. **Knowledge Base:** Content from your PDF documentation
3. **Context Window:** Maintains last 10 messages for continuity
4. **Temperature:** 0.7 for balanced creativity
5. **Max Tokens:** 800 for detailed responses

### Customizing the Assistant

Edit `server/index.js` to modify:
- System prompt (around line 35)
- Model selection (gpt-4, gpt-3.5-turbo, etc.)
- Temperature and other parameters
- Knowledge base integration

## 📊 PDF Knowledge Base

The PDF extraction creates structured data:

```json
{
  "projectName": "Hamro Foolbari, Sajha Foolbari Gyan Kunja",
  "location": "Ramechhap, Nepal",
  "corePrinciples": [...],
  "pdfContent": "Full extracted text...",
  "pageCount": 2,
  "lastUpdated": "2026-01-03T..."
}
```

To update knowledge base:
1. Replace PDF file
2. Run `npm run extract-pdf`
3. Restart backend server

## 🔒 Environment Variables

Required variables in `.env`:

```bash
# OpenAI API Key (required for chat)
OPENAI_API_KEY=sk-your-key-here

# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend API URL
VITE_API_URL=http://localhost:3001

# Project Info
PROJECT_NAME=Hamro Foolbari, Sajha Foolbari Gyan Kunja
PROJECT_LOCATION=Ramechhap, Nepal
```

## 🚨 Troubleshooting

### Chat not working?
1. Check OpenAI API key is set in `.env`
2. Make sure backend server is running (port 3001)
3. Check browser console for errors
4. Verify API key has credits

### PDF extraction fails?
1. Make sure PDF file exists: `Hamro_Foolbari_Project_Code_v1.pdf`
2. Check file permissions
3. Install dependencies: `npm install`

### Frontend not loading?
1. Check port 3000 is available
2. Run `npm install` again
3. Clear browser cache
4. Check console for errors

### Backend errors?
1. Check port 3001 is available
2. Verify `.env` file exists
3. Check OpenAI API key is valid
4. Look at terminal logs

## 📝 Best Practices

### Code Organization
- Components in `src/components/`
- Pages in `src/pages/`
- One component per file
- Clear naming conventions

### Styling
- Use Tailwind utility classes
- Mobile-first responsive design
- Consistent spacing and colors
- Semantic HTML

### API Development
- Clear endpoint naming
- Error handling
- Input validation
- Appropriate HTTP status codes

### Documentation
- Comment complex logic
- Update README for changes
- Document API endpoints
- Maintain changelog

## 🎯 Next Steps

1. **Customize Content:** Edit page content in `src/pages/`
2. **Add Features:** Build on the solid foundation
3. **Deploy:** Set up hosting (Vercel, Netlify, etc.)
4. **Monitor:** Add analytics and error tracking
5. **Scale:** Add more routes, features, and functionality

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [OpenAI API](https://platform.openai.com/docs)
- [Express.js](https://expressjs.com)

## 🆘 Support

For questions or issues:
1. Check this README
2. Review code comments
3. Check browser/terminal console
4. Review OpenAI API docs
5. Search Stack Overflow

## 📄 License

This project is part of Hamro Foolbari's commitment to transparency and open documentation.

---

Built with ❤️ for quality education in Nepal
