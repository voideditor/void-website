import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - CorteXIDE',
  description: 'Learn about CorteXIDE, an open-source AI IDE forked from Void IDE with a focus on privacy-first development.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-bold gradient-text mb-6">About CorteXIDE</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              CorteXIDE is an open-source AI-powered code editor that prioritizes developer privacy and data control. 
              Built as a fork of Void IDE, we&apos;ve enhanced it with cutting-edge AI features while maintaining complete 
              transparency and user control.
            </p>

            <h2 className="text-2xl font-semibold text-cortexide-primary mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We believe developers should have access to powerful AI coding tools without compromising their privacy 
              or losing control over their data. CorteXIDE enables you to use any AI model, run everything locally, 
              and maintain complete ownership of your code and conversations.
            </p>

            <h2 className="text-2xl font-semibold text-cortexide-primary mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
              <li>Complete AI workflow: Chat → Plan → Diff → Apply</li>
              <li>Local-only mode with Ollama, vLLM, and OpenAI-compatible endpoints</li>
              <li>Repository context RAG for better code understanding</li>
              <li>Safe apply with built-in diff viewer and audit trail</li>
              <li>Agent Mode and Gather Mode for different interaction levels</li>
              <li>Full VS Code compatibility for seamless migration</li>
            </ul>

            <h2 className="text-2xl font-semibold text-cortexide-primary mb-4">Open Source Commitment</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              CorteXIDE is released under the MIT License. We&apos;re committed to transparency, community-driven 
              development, and ensuring that AI coding tools remain accessible to all developers, not just those 
              who can afford premium services.
            </p>

            <h2 className="text-2xl font-semibold text-cortexide-primary mb-4">Join Our Community</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We&apos;re building a community of privacy-conscious developers who want to harness the power of AI 
              without sacrificing control. Join our Discord server to contribute, get support, and help shape 
              the future of AI-powered development tools.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
