# Bugs Fixed

## Part 1: Bugs Introduced

### Bug 1: Click count never incremented on redirect
- **File:** `backend/src/controllers/urlController.js` (line 66-68)
- **Description:** The `redirectUrl` handler reads URL data from storage and finds the matching URL object, but never increments the `clicks` property before writing back. Every redirect writes unchanged data, so click analytics always show 0.

### Bug 2: Frontend reads wrong error field name
- **File:** `frontend/src/components/forms/UrlForm.jsx` (line 21)
- **Description:** The frontend error handler reads `err.response?.data?.message` and `err.response?.data?.detail`, but the backend returns errors as `{ error: '...' }`. The field mismatch means users always see the generic "Error creating short URL" fallback instead of the actual backend error message (e.g., "Invalid URL").

## Part 2: Bug Fixing Process

### Bug 1 Fix: Click count increment
- **Session context:** Identified the bug by reading `urlController.js` and tracing the redirect flow. The `url.clicks++` line was completely absent between the `find()` and `writeUrls()` calls.
- **Fix applied:** Added `url.clicks++` after finding the URL object and before writing back to storage.
- **Before:**
  ```js
  const data = await storage.readUrls()
  const url = data.urls.find(u => u.shortCode === shortCode)
  await storage.writeUrls(data)
  ```
- **After:**
  ```js
  const data = await storage.readUrls()
  const url = data.urls.find(u => u.shortCode === shortCode)
  url.clicks++
  await storage.writeUrls(data)
  ```

### Bug 2: Not yet fixed
- **Status:** Identified but not yet resolved.
- **Planned fix:** Change `err.response?.data?.message || err.response?.data?.detail` to `err.response?.data?.error` in `UrlForm.jsx` line 21.

## Context Management Notes
- Used a single Claude Code session to scan all backend and frontend source files
- Identified bugs by tracing the request flow: route -> controller -> storage and comparing field names between frontend and backend
- Key technique: reading both sides of the API contract (backend response shape vs frontend error parsing) to catch the field name mismatch
