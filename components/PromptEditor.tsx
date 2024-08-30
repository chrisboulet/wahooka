'use client'

import { useState } from 'react'
import { useAppContext } from '@/context/AppContext'
import { generateContent } from '@/lib/api/openaiService'

const outputFormats = [
  { id: 'email-newsletter', label: 'Email Newsletter' },
  { id: 'social-media-post', label: 'Social Media Post' },
  { id: 'blog-post', label: 'Blog Post' },
]

export default function ContentGeneration() {
  const { topic, timeFrame, analysisComplete, analysisResult } = useAppContext();
  const [contentType, setContentType] = useState('blog-post');
  const [tone, setTone] = useState('informative');
  const [wordCount, setWordCount] = useState(500);
  const [generatedContent, setGeneratedContent] = useState('');

  const generatePrompt = () => {
    return `Create a ${contentType} about "${topic}" based on the following analysis: 
    
    ${analysisResult}
    
    The content should be ${tone} in tone and approximately ${wordCount} words long. 
    Focus on the most recent developments from the last ${timeFrame}.`;
  };

  const handleGenerate = async () => {
    // Ici, vous appelleriez votre API pour générer le contenu
    const prompt = generatePrompt();
    // Pour l'instant, nous allons juste afficher le prompt
    setGeneratedContent(prompt);
  };

  if (!analysisComplete) {
    return <p className="text-yellow-400">Please complete the topic analysis first.</p>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Content Generation</h2>
      <div className="space-y-4">
        <select
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
          className="w-full p-2 bg-gray-800 text-green-400 rounded"
        >
          <option value="blog-post">Blog Post</option>
          <option value="social-media-post">Social Media Post</option>
          <option value="news-article">News Article</option>
        </select>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="w-full p-2 bg-gray-800 text-green-400 rounded"
        >
          <option value="informative">Informative</option>
          <option value="persuasive">Persuasive</option>
          <option value="entertaining">Entertaining</option>
        </select>
        <input
          type="number"
          value={wordCount}
          onChange={(e) => setWordCount(Number(e.target.value))}
          className="w-full p-2 bg-gray-800 text-green-400 rounded"
          placeholder="Word Count"
        />
        <button
          onClick={handleGenerate}
          className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Generate Content
        </button>
      </div>
      {generatedContent && (
        <div className="mt-4 p-4 bg-gray-800 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Generated Prompt:</h3>
          <p className="whitespace-pre-wrap">{generatedContent}</p>
        </div>
      )}
    </div>
  );
}
