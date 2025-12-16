# News Intelligence RAG Backend API

## Overview
This project demonstrates a scalable Retrieval-Augmented Generation (RAG) based REST API for news intelligence.

## Tech Stack
- Node.js
- Express.js
- Redis (Caching)
- RAG Architecture (Conceptual)
- LLM (Conceptual – Gemini / Open-source)

## Architecture Flow
1. User sends query
2. Redis cache is checked
3. If cache miss → retrieve relevant news
4. Generate response
5. Cache and return response

## API Endpoint

### POST /api/query
Request:
```json
{
  "question": "What is happening in AI?"
}
```

Response:
```json
{
  "answer": "Generated answer based on news context"
}
```

## How to Run
```bash
npm install
npm start
```

## Notes
This project focuses on backend architecture, caching, and RAG workflow suitable for scalable systems.
