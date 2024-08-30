'use client'

import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';
import TopicInput from '@/components/TopicInput';
import PromptEditor from '@/components/PromptEditor';
import History from '@/components/History';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { activeTab, setActiveTab } = useAppContext();

  useEffect(() => {
    console.log('Component mounted');
    setIsLoading(false);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="container mx-auto p-4 bg-gray-900 text-green-400">
      <h1 className="text-4xl font-bold mb-8">Wahooka Content Generator</h1>
      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li>
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === 'generate' ? 'bg-green-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
              }`}
              onClick={() => setActiveTab('generate')}
            >
              Generate Content
            </button>
          </li>
          <li>
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === 'history' ? 'bg-green-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
              }`}
              onClick={() => setActiveTab('history')}
            >
              History
            </button>
          </li>
        </ul>
      </nav>
      <div>
        {activeTab === 'generate' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <TopicInput />
            <PromptEditor />
          </div>
        )}
        {activeTab === 'history' && <History />}
      </div>
    </main>
  );
}
