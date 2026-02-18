# generate-docs - Auto-Generate API Documentation

Generate comprehensive API documentation from the backend source code.

---

## Instructions

1. Read the following backend source files to extract API information:
   - `backend/src/routes/urls.js` — route definitions
   - `backend/src/controllers/urlController.js` — request handlers
   - `backend/src/services/urlService.js` — business logic
   - `backend/src/storage/fileStorage.js` — storage layer
   - `backend/src/app.js` — Express entry point and middleware

2. For each route, extract:
   - HTTP method and path
   - Request body or params
   - Response format (status codes and JSON shape)
   - Error responses

3. Generate a Markdown file at `docs/api-documentation.md` with the following structure:

```markdown
# LinkHub API Documentation

> Auto-generated from source code on [today's date]

## Base URL

`http://localhost:3000`

## Health Check

### GET /health
[Details from app.js]

## URL Endpoints

All endpoints are under `/api/urls`.

### POST /api/urls
[Request body, response, errors extracted from createShortUrl controller]

### GET /api/urls/:shortCode
[Params, redirect behavior, errors extracted from redirectUrl controller]

## Storage Schema
[Schema from fileStorage.js / CLAUDE.md]

## Error Responses
[Common error format used across endpoints]
```

4. After generating, display:
```
📄 API documentation generated: documentation/api-documentation.md
```

5. Show a brief summary of what was documented (endpoint count, etc).

---

## Important Notes

- Always read the actual source code — never hardcode endpoint details
- Include request/response examples with realistic sample data
- Document all status codes returned by each endpoint
- If new routes or controllers are added later, this command should pick them up automatically

---

End of generate-docs command.
