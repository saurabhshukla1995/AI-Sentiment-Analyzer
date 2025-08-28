# AI Sentiment Analyzer

A small AI-based project that predicts the **sentiment of user text** using **Hugging Face Transformers** with a **React frontend** and **FastAPI backend**.

## Features

- Analyze text sentiment: Positive / Neutral / Negative
- Confidence score display
- Live UI with React
- AI-powered backend using Transformers

## Tech Stack

- Frontend: React.js
- Backend: FastAPI (Python)
- AI Model: Hugging Face sentiment-analysis
- Styling: CSS (optional Tailwind/Material-UI)

## Setup

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn sentiment_api:app --reload