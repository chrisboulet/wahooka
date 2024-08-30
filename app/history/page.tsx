'use client'

import { useState } from 'react'

// Mock data for demonstration
const mockHistory = [
  { id: 1, topic: 'AI in Healthcare', date: '2023-08-30', status: 'Completed' },
  { id: 2, topic: 'Renewable Energy Trends', date: '2023-08-29', status: 'In Progress' },
  { id: 3, topic: 'Cybersecurity Best Practices', date: '2023-08-28', status: 'Completed' },
]

export default function History() {
  const [history] = useState(mockHistory)

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 p-8">
      <h1 className="text-3xl font-bold mb-6">History & Results</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-2 text-left">Topic</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {history.map(item => (
              <tr key={item.id} className="border-t border-gray-700">
                <td className="p-2">{item.topic}</td>
                <td className="p-2">{item.date}</td>
                <td className="p-2">{item.status}</td>
                <td className="p-2">
                  <button className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 mr-2">
                    View
                  </button>
                  <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}