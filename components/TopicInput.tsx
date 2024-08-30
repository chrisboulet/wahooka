'use client'

import React, { useState } from 'react'
import { analyzeTopic } from '@/lib/api/contentService'
import { useAppContext } from '@/context/AppContext'

export default function TopicAnalysis() {
  const { topic, setTopic, timeFrame, setTimeFrame, setAnalysisComplete, setAnalysisResult } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await analyzeTopic(topic, timeFrame);
      if (result.success) {
        setAnalysisResult(result.summary);
        setAnalysisComplete(true);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Topic Analysis</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic"
          className="w-full p-2 bg-gray-800 text-green-400 rounded"
        />
        <select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          className="w-full p-2 bg-gray-800 text-green-400 rounded"
        >
          <option value="last24h">Last 24 Hours</option>
          <option value="last7d">Last 7 Days</option>
          <option value="last30d">Last 30 Days</option>
        </select>
        <button 
          type="submit" 
          className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-600"
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Analyze Topic'}
        </button>
      </form>
      {error && (
        <div className="mt-4 p-3 bg-red-900 text-red-200 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
}
