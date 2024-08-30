import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-green-400 p-8">
      <h1 className="text-4xl font-bold mb-8">Wahooka Content Generator</h1>
      <nav className="space-y-4">
        <Link href="/topic-analysis" className="block text-xl hover:text-green-300">
          1. Topic Analysis
        </Link>
        <Link href="/content-generation" className="block text-xl hover:text-green-300">
          2. Content Generation
        </Link>
        <Link href="/history" className="block text-xl hover:text-green-300">
          3. History & Results
        </Link>
      </nav>
    </main>
  )
}