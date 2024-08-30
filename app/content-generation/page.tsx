'use client'

import { useState } from 'react'

const outputFormats = [
  { id: 'email-newsletter', label: 'Email Newsletter' },
  { id: 'email-executive', label: 'Email Executive Summary' },
  { id: 'facebook-post', label: 'Facebook Post' },
  { id: 'linkedin-post', label: 'LinkedIn Post' },
  { id: 'twitter-post', label: 'Twitter Post' },
  { id: 'blog-post', label: 'Blog Post' },
]

export default function ContentGeneration() {
  const [prompt, setPrompt] = useState('')
  const [selectedFormats, setSelectedFormats] = useState<string[]>([])

  const handleFormatToggle = (formatId: string) => {
    setSelectedFormats(prev =>
      prev.includes(formatId)
        ? prev.filter(id => id !== formatId)
        : [...prev, formatId]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement content generation logic
    console.log('Generating content with prompt:', prompt)
    console.log('Selected formats:', selectedFormats)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 p-8">
      <h1 className="text-3xl font-bold mb-6">Content Generation</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="prompt" className="block mb-2">Refined Prompt:</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 bg-gray-800 text-green-400 border border-green-500 rounded h-32"
          />
        </div>
        <div>
          <p className="mb-2">Select Output Formats:</p>
          <div className="grid grid-cols-2 gap-4">
            {outputFormats.map(format => (
              <label key={format.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFormats.includes(format.id)}
                  onChange={() => handleFormatToggle(format.id)}
                  className="form-checkbox text-green-500"
                />
                <span>{format.label}</span>
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Generate Content
        </button>
      </form>
    </div>
  )
}