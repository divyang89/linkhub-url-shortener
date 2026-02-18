import express from 'express'
import { createShortUrl, redirectUrl } from '../controllers/urlController.js'

const router = express.Router()

// Create short URL
router.post('/', createShortUrl)

// Redirect to long URL (catch-all for short codes)
router.get('/:shortCode', redirectUrl)

export default router
