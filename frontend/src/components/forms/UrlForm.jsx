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
          <p className="text-sm text-gray-600 mb-2">Your short URL:</p>
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
          {error}
        </div>
      )}
    </div>
  )
}
