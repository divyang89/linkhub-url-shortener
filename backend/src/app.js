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
  console.log(`Server running on http://localhost:${PORT}`)
  console.log(`API available at http://localhost:${PORT}/api`)
  console.log(`Using File System storage (data/urls.json)`)
})
