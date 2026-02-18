# LinkHub API Documentation

> Auto-generated from source code on 2026-02-17

## Base URL

`http://localhost:3000`

## Middleware

- **CORS** — enabled for all origins
- **JSON parsing** — `express.json()` for request body parsing

## Health Check

### GET /health

Returns server health status.

**Response** `200 OK`
```json
{
  "status": "ok",
  "timestamp": "2026-02-17T10:30:00.000Z"
}
```

---

## URL Endpoints

All endpoints are under `/api/urls`.

---

### POST /api/urls

Create a shortened URL.

**Request Body**
```json
{
  "longUrl": "https://example.com/some/very/long/url"
}
```

**Validation Rules**
- `longUrl` is required
- Must be a valid URL with `http:` or `https:` protocol
- Duplicate URLs return the existing short code instead of creating a new one

**Response — New URL Created** `201 Created`
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "longUrl": "https://example.com/some/very/long/url",
  "shortCode": "xK9mR2q",
  "shortUrl": "http://localhost:3000/api/urls/xK9mR2q",
  "createdAt": "2026-02-17T10:30:00.000Z",
  "clicks": 0
}
```

**Response — Duplicate URL** `200 OK`
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "longUrl": "https://example.com/some/very/long/url",
  "shortCode": "xK9mR2q",
  "shortUrl": "http://localhost:3000/api/urls/xK9mR2q",
  "createdAt": "2026-02-17T10:30:00.000Z",
  "clicks": 5
}
```

**Error Responses**

| Status | Body | Condition |
|--------|------|-----------|
| `400` | `{ "error": "longUrl is required" }` | Missing `longUrl` in request body |
| `400` | `{ "error": "Invalid URL. Must be a valid http or https URL." }` | Malformed URL or non-http(s) protocol |
| `500` | `{ "error": "<message>" }` | Internal server error |

---

### GET /api/urls/:shortCode

Redirect to the original long URL. Increments the click counter on each access.

**Path Parameters**

| Parameter | Type | Description |
|-----------|------|-------------|
| `shortCode` | string | The 7-character alphanumeric short code |

**Response — Success** `302 Redirect`
- Redirects the client to the original `longUrl`
- Increments `clicks` by 1 in storage before redirecting

**Error Responses**

| Status | Body | Condition |
|--------|------|-----------|
| `404` | `{ "error": "Short URL not found" }` | No URL matches the given short code |
| `500` | `{ "error": "<message>" }` | Internal server error |

---

## Storage Schema

Data is stored in `backend/data/urls.json` (auto-created on server start).

```json
{
  "urls": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "longUrl": "https://example.com/some/very/long/url",
      "shortCode": "xK9mR2q",
      "createdAt": "2026-02-17T10:30:00.000Z",
      "clicks": 0
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (UUID) | Unique identifier generated via `crypto.randomUUID()` |
| `longUrl` | string | The original URL |
| `shortCode` | string (7 chars) | Alphanumeric code generated via `crypto.randomBytes()` |
| `createdAt` | string (ISO 8601) | Timestamp of creation |
| `clicks` | number | Redirect count, incremented on each GET request |

## Error Responses

All errors follow a consistent format:

```json
{
  "error": "Description of what went wrong"
}
```

The `error` field is always a string. HTTP status codes indicate the category:
- `400` — Bad request (validation failure)
- `404` — Resource not found
- `500` — Internal server error
