const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';

export async function analyzeTopic(topic: string, dateRange: string) {
  const response = await fetch(`${API_BASE_URL}/analyze-topic`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic, dateRange }),
  });

  if (!response.ok) {
    throw new Error('Failed to analyze topic');
  }

  return response.json();
}

// Add similar functions for content generation and fetching history
