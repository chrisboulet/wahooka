'use client'

import { useState } from 'react'

export default function TopicAnalysis() {
  const [topic, setTopic] = useState('')
  const [dateRange, setDateRange] = useState('last24h')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to backend
    console.log('Analyzing topic:', topic, 'for date range:', dateRange)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 p-8">
      <h1 className="text-3xl font-bold mb-6">Topic Analysis</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="topic" className="block mb-2">Enter Topic:</label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-2 bg-gray-800 text-green-400 border border-green-500 rounded"
          />
        </div>
        <div>
          <label htmlFor="dateRange" className="block mb-2">Select Date Range:</label>
          <select
            id="dateRange"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="w-full p-2 bg-gray-800 text-green-400 border border-green-500 rounded"
          >
            <option value="last24h">Last 24 Hours</option>
            <option value="lastWeek">Last Week</option>
            <option value="lastMonth">Last Month</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Analyze Topic
        </button>
      </form>
    </div>
  )
}
