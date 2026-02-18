# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LinkHub is a URL shortener with analytics, built as part of the Claude Code Bootcamp. It uses a monorepo layout with separate frontend and backend directories.

## Tech Stack

- **Frontend:** React 18 + Vite + Tailwind CSS + React Router v6
- **Backend:** Node.js + Express (ES modules, `"type": "module"`)
- **Storage:** File system JSON (`backend/data/urls.json`) — no database
- **HTTP Client:** Axios (frontend → backend via Vite proxy)

## Commands

### Backend (run from `backend/`)
```bash
npm install          # install dependencies
npm run dev          # start with --watch (auto-reload), port 3000
npm start            # production start
```

### Frontend (run from `frontend/`)
```bash
npm install          # install dependencies
npm run dev          # Vite dev server, port 5173
npm run build        # production build to dist/
```

### Health check
```
GET http://localhost:3000/health
```

## Architecture

### Request Flow
Frontend (`:5173`) → Vite proxy (`/api` → `:3000`) → Express routes → Controllers → Storage (JSON file)

### Backend Layers
- **`src/app.js`** — Express entry point, middleware setup, top-level `await initStorage()`
- **`src/routes/urls.js`** — Route definitions under `/api/urls`
- **`src/controllers/urlController.js`** — Request handlers (most are TODO stubs returning 501)
- **`src/services/urlService.js`** — Business logic: short code generation, URL validation (stubs)
- **`src/storage/fileStorage.js`** — CRUD operations against `data/urls.json` (fully implemented)

### API Endpoints (all under `/api/urls`)
| Method | Path | Status | Purpose |
|--------|------|--------|---------|
| POST | `/` | Stub | Create short URL |
| GET | `/:shortCode` | Stub | Redirect to original URL |

### Frontend Pages
- `/` — Home page with `UrlForm` component for creating short URLs

### Storage Schema
```json
{
  "urls": [
    {
      "id": "string",
      "longUrl": "string",
      "shortCode": "string (6-8 chars)",
      "createdAt": "ISO datetime",
      "clicks": 0
    }
  ]
}
```
Storage auto-initializes on server start. Delete `backend/data/` to reset all data.

## Bootcamp Context

This project is built incrementally across 11 modules. Stub endpoints have TODO comments indicating which module implements them. Use `/guide moduleN` and `/assess moduleN` commands to view requirements and check progress.

## Conventions

- Backend uses ES module imports (not CommonJS)
- Frontend uses JSX with function components and hooks
- Tailwind utility classes for all styling
- Vite proxies `/api` requests to the backend — frontend code uses relative `/api` paths via axios
