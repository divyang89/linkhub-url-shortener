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
      console.log('Created data/urls.json')
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
