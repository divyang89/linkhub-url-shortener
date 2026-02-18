import crypto from 'crypto'
import * as storage from '../storage/fileStorage.js'
import { generateShortCode, validateUrl, findExistingUrl } from '../services/urlService.js'

export const createShortUrl = async (req, res) => {
  try {
    const { longUrl } = req.body

    if (!longUrl) {
      return res.status(400).json({ error: 'longUrl is required' })
    }

    if (!validateUrl(longUrl)) {
      return res.status(400).json({ error: 'Invalid URL. Must be a valid http or https URL.' })
    }

    // Check if URL already exists — return existing short code
    const existing = await findExistingUrl(longUrl)
    if (existing) {
      return res.status(200).json({
        id: existing.id,
        longUrl: existing.longUrl,
        shortCode: existing.shortCode,
        shortUrl: `${req.protocol}://${req.get('host')}/api/urls/${existing.shortCode}`,
        createdAt: existing.createdAt,
        clicks: existing.clicks
      })
    }

    const shortCode = await generateShortCode()

    const urlData = {
      id: crypto.randomUUID(),
      longUrl,
      shortCode,
      createdAt: new Date().toISOString(),
      clicks: 0
    }

    await storage.addUrl(urlData)

    res.status(201).json({
      id: urlData.id,
      longUrl: urlData.longUrl,
      shortCode: urlData.shortCode,
      shortUrl: `${req.protocol}://${req.get('host')}/api/urls/${urlData.shortCode}`,
      createdAt: urlData.createdAt,
      clicks: urlData.clicks
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params

    // Read all URLs
    const data = await storage.readUrls()
    const urlData = data.urls.find(u => u.shortCode === shortCode)

    if (!urlData) {
      return res.status(404).json({ error: 'Short URL not found' })
    }

    // Increment click count
    urlData.clicks = (urlData.clicks || 0) + 1

    // Write updated data back to storage
    await storage.writeUrls(data)

    // Redirect to the original URL
    res.redirect(urlData.longUrl)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
