import crypto from 'crypto'
import { findUrlByShortCode, readUrls } from '../storage/fileStorage.js'

export const generateShortCode = async (length = 7) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let shortCode

  do {
    shortCode = ''
    const bytes = crypto.randomBytes(length)
    for (let i = 0; i < length; i++) {
      shortCode += chars[bytes[i] % chars.length]
    }
  } while (!(await isShortCodeAvailable(shortCode)))

  return shortCode
}

export const validateUrl = (url) => {
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

export const isShortCodeAvailable = async (shortCode) => {
  const existing = await findUrlByShortCode(shortCode)
  return !existing
}

export const findExistingUrl = async (longUrl) => {
  const data = await readUrls()
  return data.urls.find(url => url.longUrl === longUrl)
}
