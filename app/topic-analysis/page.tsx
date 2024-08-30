'use client'

import { useState } from 'react'
import { analyzeTopic } from '@/lib/api/contentService'

export default function TopicAnalysis() {
  const [topic, setTopic] = useState('')
  const [dateRange, setDateRange] = useState('last24h')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const data = await analyzeTopic(topic, dateRange)
      setResult(data.analysis)
    } catch (err) {
      setError('Failed to analyze topic. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 p-8">
      <h1 className="text-3xl font-bold mb-6">Topic Analysis</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ... (previous form inputs) ... */}
        <button 
          type="submit" 
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-600"
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Analyze Topic'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Analysis Result:</h2>
          <p className="whitespace-pre-wrap">{result}</p>
        </div>
      )}
    </div>
  )
}