# LinkHub - URL Shortener

Building a URL shortener with analytics using Claude Code Bootcamp.

## Tech Stack
- Frontend: React (Vite) + Tailwind CSS
- Backend: Node.js + Express
- Storage: File System (JSON files in data/)

## Quick Start

### Install Dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd backend
npm install
```

### Run Development Servers

**Backend:**
```bash
cd backend
npm run dev              # Runs on http://localhost:3000
```

**Frontend:**
```bash
cd frontend
npm run dev              # Runs on http://localhost:5173
```

**Update Proxy (if needed):**
Edit `frontend/vite.config.js` to point to your backend port.

## Storage

This project uses **File System storage** (JSON files):
- Data stored in: `backend/data/urls.json`
- Automatically created on first run
- Zero database setup required!
- Perfect for learning and development

**Data file example:**
```json
{
  "urls": [
    {
      "id": "1",
      "longUrl": "https://example.com",
      "shortCode": "abc123",
      "createdAt": "2025-01-26T10:00:00Z",
      "clicks": 0
    }
  ]
}
```

## Project Structure

- `frontend/` - React UI application
- `backend/` - Node.js + Express API server
- `backend/data/` - JSON storage files (gitignored)

## Implementation Status

All endpoints return **501 Not Implemented** with TODO hints:
- Project structure complete
- URL shortening (Module 2-3)
- Redirect functionality (Module 3)
- Dashboard (Module 5)
- Analytics (Module 7)

Follow the bootcamp guide to implement features progressively!

## Development Notes

- Data persists in `data/urls.json`
- Delete `data/` folder to reset all data
- Each endpoint has TODO comments explaining what to implement
- Use the `/assess` command to check your progress
