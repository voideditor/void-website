import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation - CorteXIDE',
  description: 'CorteXIDE documentation and guides for getting started with the open-source AI IDE.',
}

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-bold gradient-text mb-6">CorteXIDE Documentation</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Welcome to the CorteXIDE documentation! Here you&apos;ll find comprehensive guides, tutorials, 
              and reference materials to help you get the most out of your AI-powered development experience.
            </p>

            <div className="bg-cortexide-primary/10 dark:bg-cortexide-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-cortexide-primary mb-3">🚧 Documentation Coming Soon</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We&apos;re currently working on comprehensive documentation for CorteXIDE. In the meantime, 
                you can find helpful resources and community support in our Discord server.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-cortexide-primary mb-4">Quick Start</h2>
            <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
              <li>Download CorteXIDE for your platform</li>
              <li>Install and launch the application</li>
              <li>Configure your AI model (local or cloud-based)</li>
              <li>Start coding with AI assistance!</li>
            </ol>

            <h2 className="text-2xl font-semibold text-cortexide-primary mb-4">Planned Documentation Sections</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
              <li>Installation and Setup</li>
              <li>AI Model Configuration</li>
              <li>Local Development Setup</li>
              <li>Feature Guides (Chat, Agent Mode, etc.)</li>
              <li>Privacy and Security</li>
              <li>VS Code Migration</li>
              <li>Contributing to CorteXIDE</li>
              <li>API Reference</li>
            </ul>

            <h2 className="text-2xl font-semibold text-cortexide-primary mb-4">Get Help</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              While we work on the documentation, you can get help from our community:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Join our Discord server for real-time support</li>
              <li>Check out our GitHub repository for issues and discussions</li>
              <li>Email us at hello@cortexide.com for direct support</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
