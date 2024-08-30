const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

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

export async function generateContent(prompt: string, formats: string[]) {
  const response = await fetch(`${API_BASE_URL}/generate-content`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt, formats }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate content');
  }

  return response.json();
}

export async function getHistory() {
  const response = await fetch(`${API_BASE_URL}/history`);

  if (!response.ok) {
    throw new Error('Failed to fetch history');
  }

  return response.json();
}