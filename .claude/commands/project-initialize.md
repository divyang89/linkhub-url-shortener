# setup - Project Initialization Command

Interactive project setup for URL shortener bootcamp using File System storage.

## Usage
```
/setup
```

---

## Command Flow

### 1. Check & Welcome
```
🚀 Setting up your URL shortener project!

Checking existing files...
```

If `frontend/` or `backend/` exists → Ask to remove and restart

---

### 2. Ask Tech Stack (3 Quick Questions)

**Frontend:**
```
Frontend Framework?
1. React (Vite)
2. Vue 3 (Vite)
3. Next.js
4. Vanilla JS

Choose (1-4):
```

**Styling:**
```
Styling?
1. Tailwind CSS
2. Bootstrap
3. Plain CSS

Choose (1-3):
```

**Backend:**
```
Backend Framework?
1. Node.js + Express
2. Python + FastAPI
3. Java + Spring Boot

Choose (1-3):
```

---

### 3. Create Structure

Show: `✅ Creating project structure...`

**All projects use File System storage (JSON files) - no database setup needed!**

---

## Project Structures by Backend

### Node.js + Express

```
project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── forms/
│   │   │       └── UrlForm.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── backend/
│   ├── data/
│   │   └── .gitkeep
│   ├── src/
│   │   ├── routes/
│   │   │   └── urls.js
│   │   ├── controllers/
│   │   │   └── urlController.js
│   │   ├── services/
│   │   │   └── urlService.js
│   │   ├── storage/
│   │   │   └── fileStorage.js
│   │   └── app.js
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

### Python + FastAPI

```
project/
├── frontend/ (same as above)
│
├── backend/
│   ├── data/
│   │   └── .gitkeep
│   ├── app/
│   │   ├── api/
│   │   │   └── urls.py
│   │   ├── models/
│   │   │   └── url.py
│   │   ├── services/
│   │   │   └── url_service.py
│   │   ├── storage/
│   │   │   └── file_storage.py
│   │   └── main.py
│   ├── requirements.txt
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

### Java + Spring Boot

```
project/
├── frontend/ (same as above)
│
├── backend/
│   ├── data/
│   │   └── .gitkeep
│   ├── src/
│   │   └── main/
│   │       ├── java/com/linkhub/
│   │       │   ├── controller/
│   │       │   │   └── UrlController.java
│   │       │   ├── service/
│   │       │   │   └── UrlService.java
│   │       │   ├── storage/
│   │       │   │   └── FileStorage.java
│   │       │   ├── model/
│   │       │   │   └── Url.java
│   │       │   └── LinkHubApplication.java
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
├── .gitignore
└── README.md
```

---

## File Templates

### Node.js + Express + File System

**backend/package.json:**
```json
{
  "name": "linkhub-backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "node --watch src/app.js",
    "start": "node src/app.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  }
}
```

**backend/src/storage/fileStorage.js:**
```javascript
import fs from 'fs/promises'
import path from 'path'

const DB_DIR = './data'
const URLS_FILE = path.join(DB_DIR, 'urls.json')

// Initialize storage
export const initStorage = async () => {
  try {
    await fs.mkdir(DB_DIR, { recursive: true })
    try {
      await fs.access(URLS_FILE)
    } catch {
      await fs.writeFile(URLS_FILE, JSON.stringify({ urls: [] }, null, 2))
      console.log('✅ Created data/urls.json')
    }
  } catch (error) {
    console.error('Error initializing storage:', error)
  }
}

// Read all URLs
export const readUrls = async () => {
  try {
    const data = await fs.readFile(URLS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading URLs:', error)
    return { urls: [] }
  }
}

// Write URLs
export const writeUrls = async (data) => {
  try {
    await fs.writeFile(URLS_FILE, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error writing URLs:', error)
    throw error
  }
}

// Find URL by short code
export const findUrlByShortCode = async (shortCode) => {
  const data = await readUrls()
  return data.urls.find(url => url.shortCode === shortCode)
}

// Add URL
export const addUrl = async (urlData) => {
  const data = await readUrls()
  data.urls.push(urlData)
  await writeUrls(data)
  return urlData
}
```

**backend/src/controllers/urlController.js:**
```javascript
import * as storage from '../storage/fileStorage.js'

// TODO: Implement in Module 2-3
export const createShortUrl = async (req, res) => {
  try {
    // TODO: Extract longUrl from request body
    // TODO: Validate URL format
    // TODO: Generate unique short code (use urlService)
    // TODO: Create URL object with id, longUrl, shortCode, createdAt
    // TODO: Save using storage.addUrl()
    // TODO: Return short URL response

    res.status(501).json({
      message: "To be implemented in Module 2-3",
      hint: "Use storage.addUrl() to save the URL"
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// TODO: Implement in Module 3
export const redirectUrl = async (req, res) => {
  try {
    // TODO: Get short code from params
    // TODO: Find URL using storage.findUrlByShortCode()
    // TODO: If not found, return 404
    // TODO: Redirect to long URL using res.redirect()

    res.status(501).json({
      message: "To be implemented in Module 3",
      hint: "Use storage.findUrlByShortCode() then res.redirect()"
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
```

**backend/src/services/urlService.js:**
```javascript
// TODO: Implement in Module 3

export const generateShortCode = () => {
  // TODO: Generate 6-8 character alphanumeric code
  // TODO: Use randomization (Math.random or crypto)
  // TODO: Check for collisions using storage
  // TODO: Return unique code
  return "STUB123" // Placeholder
}

export const validateUrl = (url) => {
  // TODO: Validate URL format using regex or URL constructor
  // TODO: Check protocol (http/https)
  // TODO: Return true/false
  return true // Placeholder
}

export const isShortCodeAvailable = async (shortCode) => {
  // TODO: Check if short code already exists in storage
  // TODO: Return true if available, false if taken
  return true // Placeholder
}
```

**backend/src/routes/urls.js:**
```javascript
import express from 'express'
import { createShortUrl, redirectUrl } from '../controllers/urlController.js'

const router = express.Router()

// Create short URL
router.post('/', createShortUrl)

// Redirect to long URL (catch-all for short codes)
router.get('/:shortCode', redirectUrl)

export default router
```

**backend/src/app.js:**
```javascript
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import urlRoutes from './routes/urls.js'
import { initStorage } from './storage/fileStorage.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Initialize file storage
await initStorage()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/urls', urlRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📊 API available at http://localhost:${PORT}/api`)
  console.log(`💾 Using File System storage (data/urls.json)`)
})
```

**backend/.env.example:**
```env
PORT=3000
NODE_ENV=development
```

---

### Python + FastAPI + File System

**backend/requirements.txt:**
```
fastapi==0.108.0
uvicorn[standard]==0.25.0
python-dotenv==1.0.0
pydantic==2.5.3
```

**backend/app/storage/file_storage.py:**
```python
import json
import os
from pathlib import Path
from typing import List, Optional, Dict

DB_DIR = Path('./data')
URLS_FILE = DB_DIR / 'urls.json'

def init_storage():
    """Initialize file storage"""
    DB_DIR.mkdir(exist_ok=True)
    if not URLS_FILE.exists():
        URLS_FILE.write_text(json.dumps({'urls': []}, indent=2))
        print('✅ Created data/urls.json')

def read_urls() -> Dict:
    """Read all URLs from file"""
    try:
        with open(URLS_FILE, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f'Error reading URLs: {e}')
        return {'urls': []}

def write_urls(data: Dict):
    """Write URLs to file"""
    with open(URLS_FILE, 'w') as f:
        json.dump(data, f, indent=2)

def find_url_by_short_code(short_code: str) -> Optional[Dict]:
    """Find URL by short code"""
    data = read_urls()
    for url in data['urls']:
        if url.get('shortCode') == short_code:
            return url
    return None

def add_url(url_data: Dict) -> Dict:
    """Add new URL"""
    data = read_urls()
    data['urls'].append(url_data)
    write_urls(data)
    return url_data
```

**backend/app/api/urls.py:**
```python
from fastapi import APIRouter, HTTPException, status
from fastapi.responses import RedirectResponse
from app.models.url import UrlCreate, UrlResponse
from app.services import url_service
from app.storage import file_storage

router = APIRouter()

@router.post("/", response_model=UrlResponse, status_code=status.HTTP_201_CREATED)
async def create_short_url(url_data: UrlCreate):
    """
    Create a short URL
    TODO: Implement in Module 2-3
    """
    # TODO: Validate URL using url_service.validate_url()
    # TODO: Generate short code using url_service.generate_short_code()
    # TODO: Create URL dict with id, longUrl, shortCode, createdAt
    # TODO: Save using file_storage.add_url()
    # TODO: Return UrlResponse

    raise HTTPException(
        status_code=501,
        detail="To be implemented in Module 2-3. Hint: Use file_storage.add_url()"
    )

@router.get("/{short_code}")
async def redirect_url(short_code: str):
    """
    Redirect to original URL
    TODO: Implement in Module 3
    """
    # TODO: Find URL using file_storage.find_url_by_short_code()
    # TODO: If not found, raise 404
    # TODO: Return RedirectResponse to long URL

    raise HTTPException(
        status_code=501,
        detail="To be implemented in Module 3. Hint: Use RedirectResponse"
    )
```

**backend/app/models/url.py:**
```python
from pydantic import BaseModel, HttpUrl
from datetime import datetime
from typing import Optional

class UrlCreate(BaseModel):
    longUrl: HttpUrl

class UrlResponse(BaseModel):
    id: str
    longUrl: str
    shortCode: str
    shortUrl: str
    createdAt: datetime
    clicks: int = 0
```

**backend/app/services/url_service.py:**
```python
# TODO: Implement in Module 3

def generate_short_code() -> str:
    """
    Generate unique short code
    TODO: Implement random alphanumeric generation (6-8 chars)
    TODO: Check for collisions using file_storage
    TODO: Return unique code
    """
    return "STUB123"  # Placeholder

def validate_url(url: str) -> bool:
    """
    Validate URL format
    TODO: Implement URL validation
    TODO: Check protocol (http/https)
    """
    return True  # Placeholder

async def is_short_code_available(short_code: str) -> bool:
    """
    Check if short code is available
    TODO: Check storage for existing code
    """
    return True  # Placeholder
```

**backend/app/main.py:**
```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import urls
from app.storage import file_storage

app = FastAPI(
    title="LinkHub API",
    description="URL Shortener with Analytics",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize storage
file_storage.init_storage()

# Routes
app.include_router(urls.router, prefix="/api/urls", tags=["urls"])

@app.get("/health")
async def health_check():
    return {
        "status": "ok",
        "storage": "File System (data/urls.json)"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

**backend/.env.example:**
```env
PORT=8000
```

---

### Java + Spring Boot + File System

**backend/pom.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
    </parent>

    <groupId>com.linkhub</groupId>
    <artifactId>linkhub-backend</artifactId>
    <version>1.0.0</version>

    <properties>
        <java.version>17</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

**backend/src/main/java/com/linkhub/storage/FileStorage.java:**
```java
package com.linkhub.storage;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.linkhub.model.Url;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class FileStorage {
    private static final String DB_DIR = "./data";
    private static final String URLS_FILE = DB_DIR + "/urls.json";
    private final ObjectMapper mapper = new ObjectMapper();

    @PostConstruct
    public void initStorage() throws IOException {
        Files.createDirectories(Paths.get(DB_DIR));
        File file = new File(URLS_FILE);
        if (!file.exists()) {
            UrlContainer container = new UrlContainer();
            container.setUrls(new ArrayList<>());
            mapper.writerWithDefaultPrettyPrinter()
                   .writeValue(file, container);
            System.out.println("✅ Created data/urls.json");
        }
    }

    public UrlContainer readUrls() throws IOException {
        File file = new File(URLS_FILE);
        return mapper.readValue(file, UrlContainer.class);
    }

    public void writeUrls(UrlContainer data) throws IOException {
        mapper.writerWithDefaultPrettyPrinter()
               .writeValue(new File(URLS_FILE), data);
    }

    public Optional<Url> findUrlByShortCode(String shortCode) throws IOException {
        UrlContainer data = readUrls();
        return data.getUrls().stream()
                .filter(url -> url.getShortCode().equals(shortCode))
                .findFirst();
    }

    public Url addUrl(Url url) throws IOException {
        UrlContainer data = readUrls();
        data.getUrls().add(url);
        writeUrls(data);
        return url;
    }

    public static class UrlContainer {
        private List<Url> urls;

        public List<Url> getUrls() { return urls; }
        public void setUrls(List<Url> urls) { this.urls = urls; }
    }
}
```

**backend/src/main/java/com/linkhub/controller/UrlController.java:**
```java
package com.linkhub.controller;

import com.linkhub.model.Url;
import com.linkhub.service.UrlService;
import com.linkhub.storage.FileStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/urls")
@CrossOrigin(origins = "http://localhost:5173")
public class UrlController {

    @Autowired
    private UrlService urlService;

    @Autowired
    private FileStorage fileStorage;

    // TODO: Implement in Module 2-3
    @PostMapping
    public ResponseEntity<?> createShortUrl(@RequestBody Map<String, String> request) {
        // TODO: Extract longUrl from request
        // TODO: Validate URL using urlService
        // TODO: Generate short code using urlService
        // TODO: Create Url object
        // TODO: Save using fileStorage.addUrl()
        // TODO: Return short URL response

        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED)
                .body(Map.of(
                    "message", "To be implemented in Module 2-3",
                    "hint", "Use fileStorage.addUrl()"
                ));
    }

    // TODO: Implement in Module 3
    @GetMapping("/{shortCode}")
    public ResponseEntity<?> redirectUrl(@PathVariable String shortCode) {
        // TODO: Find URL using fileStorage.findUrlByShortCode()
        // TODO: If not found, return 404
        // TODO: Return redirect to long URL

        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED)
                .body(Map.of(
                    "message", "To be implemented in Module 3",
                    "hint", "Use RedirectView or ResponseEntity.status(302).location()"
                ));
    }
}
```

**backend/src/main/java/com/linkhub/model/Url.java:**
```java
package com.linkhub.model;

import java.time.LocalDateTime;

public class Url {
    private String id;
    private String longUrl;
    private String shortCode;
    private LocalDateTime createdAt;
    private Integer clicks;

    // Constructors
    public Url() {
        this.clicks = 0;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getLongUrl() { return longUrl; }
    public void setLongUrl(String longUrl) { this.longUrl = longUrl; }

    public String getShortCode() { return shortCode; }
    public void setShortCode(String shortCode) { this.shortCode = shortCode; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public Integer getClicks() { return clicks; }
    public void setClicks(Integer clicks) { this.clicks = clicks; }
}
```

**backend/src/main/java/com/linkhub/service/UrlService.java:**
```java
package com.linkhub.service;

import org.springframework.stereotype.Service;

@Service
public class UrlService {

    // TODO: Implement in Module 3
    public String generateShortCode() {
        // TODO: Generate 6-8 character alphanumeric code
        // TODO: Use SecureRandom for randomization
        // TODO: Check for collisions using FileStorage
        return "STUB123"; // Placeholder
    }

    // TODO: Implement validation
    public boolean validateUrl(String url) {
        // TODO: Validate URL format
        // TODO: Check protocol (http/https)
        return true; // Placeholder
    }

    public boolean isShortCodeAvailable(String shortCode) {
        // TODO: Check if code exists in storage
        return true; // Placeholder
    }
}
```

**backend/src/main/java/com/linkhub/LinkHubApplication.java:**
```java
package com.linkhub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LinkHubApplication {
    public static void main(String[] args) {
        SpringApplication.run(LinkHubApplication.class, args);
        System.out.println("🚀 Server running on http://localhost:8080");
        System.out.println("💾 Using File System storage (data/urls.json)");
    }
}
```

**backend/src/main/resources/application.properties:**
```properties
server.port=8080
spring.application.name=linkhub-backend
```

---

### Frontend Files (Same for all backends)

**frontend/package.json:**
```json
{
  "name": "linkhub-frontend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

**frontend/vite.config.js:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Node.js default
        // target: 'http://localhost:8000', // Python FastAPI
        // target: 'http://localhost:8080', // Java Spring Boot
        changeOrigin: true
      }
    }
  }
})
```

**frontend/src/services/api.js:**
```javascript
import axios from 'axios'

const api = axios.create({
  baseURL: '/api'
})

export default api
```

**frontend/src/components/forms/UrlForm.jsx:**
```jsx
import { useState } from 'react'
import api from '../../services/api'

export default function UrlForm() {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setResult('')
    setLoading(true)

    try {
      const res = await api.post('/urls', { longUrl: url })
      setResult(res.data.shortUrl || 'Short URL created!')
      setUrl('')
    } catch (err) {
      const message = err.response?.data?.message || err.response?.data?.detail
      setError(message || 'Error creating short URL')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Enter your long URL
          </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/very/long/url"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-medium"
        >
          {loading ? 'Creating...' : 'Shorten URL'}
        </button>
      </form>

      {result && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">✅ Your short URL:</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={result}
              readOnly
              className="flex-1 p-2 border border-gray-300 rounded bg-white"
            />
            <button
              onClick={() => navigator.clipboard.writeText(result)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Copy
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          ❌ {error}
        </div>
      )}
    </div>
  )
}
```

**frontend/src/pages/Home.jsx:**
```jsx
import UrlForm from '../components/forms/UrlForm'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          LinkHub
        </h1>
        <p className="text-gray-600">
          Shorten and track your URLs
        </p>
      </div>
      <UrlForm />
    </div>
  )
}
```

**frontend/src/App.jsx:**
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-xl font-bold text-blue-600">
                LinkHub
              </a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
```

**frontend/src/main.jsx:**
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**frontend/src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**frontend/index.html:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LinkHub - URL Shortener</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

### .gitignore

```
# Dependencies
node_modules/
venv/
__pycache__/
target/
*.class

# Environment
.env
.env.local

# Data (File System Storage)
data/
*.json
!package.json
!package-lock.json
!pom.xml

# Build
dist/
build/
*.jar
*.war

# Logs
*.log
logs/

# Editor
.vscode/
.idea/
*.iml
.settings/
.project
.classpath

# OS
.DS_Store
Thumbs.db
```

---

### README.md

```markdown
# LinkHub - URL Shortener

Building a URL shortener with analytics using Claude Code Bootcamp.

## Tech Stack
- Frontend: [Selected Framework]
- Backend: [Selected Framework]
- Storage: File System (JSON files in data/)

## Quick Start

### Install Dependencies

**Frontend:**
\`\`\`bash
cd frontend
npm install
\`\`\`

**Backend:**

*Node.js:*
\`\`\`bash
cd backend
npm install
\`\`\`

*Python:*
\`\`\`bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
\`\`\`

*Java:*
\`\`\`bash
cd backend
mvn clean install
\`\`\`

### Run Development Servers

**Backend:**
\`\`\`bash
cd backend

# Node.js
npm run dev              # Runs on http://localhost:3000

# Python
uvicorn app.main:app --reload  # Runs on http://localhost:8000

# Java
mvn spring-boot:run      # Runs on http://localhost:8080
\`\`\`

**Frontend:**
\`\`\`bash
cd frontend
npm run dev              # Runs on http://localhost:5173
\`\`\`

**Update Proxy (if needed):**
Edit `frontend/vite.config.js` to point to your backend port.

## Storage

This project uses **File System storage** (JSON files):
- Data stored in: `backend/data/urls.json`
- Automatically created on first run
- Zero database setup required!
- Perfect for learning and development

**Data file example:**
\`\`\`json
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
\`\`\`

## API Endpoints

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/urls` | Create a short URL |
| GET | `/api/urls/:shortCode` | Redirect to original URL |

## Project Structure

- `frontend/` - React UI application
- `backend/` - API server ([Node.js/Python/Java])
- `backend/data/` - JSON storage files (gitignored)

## Implementation Status

Both endpoints return **501 Not Implemented** with TODO hints:
- ✅ Project structure complete
- ⏳ URL shortening (Module 2-3)
- ⏳ Redirect functionality (Module 3)

Follow the bootcamp guide to implement features progressively!

## Development Notes

- Data persists in `data/urls.json`
- Delete `data/` folder to reset all data
- Each endpoint has TODO comments explaining what to implement
- Use the `/review` command to check your progress
```

---

## Final Output Message

```
✅ Project created successfully!

Tech Stack:
  Frontend: [Framework] on port 5173
  Backend: [Framework] on port [3000/8000/8080]
  Storage: File System (JSON)

📁 Structure:
   frontend/ - UI application
   backend/  - API server
   backend/data/ - JSON storage (auto-created)

💾 Storage:
   Using File System storage (data/urls.json)
   ✅ Zero database setup required
   ✅ Data persists between restarts
   ✅ Easy to view/debug (just open the JSON file)

📡 API Endpoints:
   POST /api/urls           → Create short URL
   GET  /api/urls/:shortCode → Redirect to original URL

📦 Next Steps:

1. Install dependencies:
   cd frontend && npm install
   cd backend && [npm install / pip install -r requirements.txt / mvn install]

2. Start servers:
   # Terminal 1 - Backend
   cd backend && [npm run dev / uvicorn app.main:app --reload / mvn spring-boot:run]

   # Terminal 2 - Frontend
   cd frontend && npm run dev

3. Visit: http://localhost:5173

4. Check backend health:
   curl http://localhost:[3000/8000/8080]/health

✨ Ready for Module 1!

📝 Note: Both endpoints return 501 (Not Implemented) with TODO hints.
You'll implement them progressively in Modules 2-3.

Data will be stored in: backend/data/urls.json
```

---

## Cleanup Command

If user runs `/setup cleanup`:

```
⚠️  This will DELETE frontend/ and backend/ folders.
Continue? (yes/no)
```

If yes:
```bash
rm -rf frontend/ backend/
```

Then show:
```
✅ Cleanup complete. Run /setup to create a fresh project.
```

---

## Important Notes

- **File System storage only** - Simple and perfect for learning
- **Only 2 endpoints generated** - Create short URL (POST) and Redirect (GET /:shortCode)
- **All controllers have TODOs** - Participants implement the logic
- **No database setup needed** - Just npm install and run
- **Data persists** - Stored in `data/urls.json`
- **Easy to reset** - Delete `data/` folder
- **Supports all 3 backends** - Node.js, Python, Java
