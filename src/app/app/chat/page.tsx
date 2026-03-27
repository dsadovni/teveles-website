'use client'

import { useState } from 'react'
import { Send, BrainCircuit } from 'lucide-react'
import { Button } from '@/components/ui/button'

const examplePrompts = [
  'How was my recovery this week?',
  "What's my weekly training volume trend?",
  'Analyze my sleep patterns this month',
  'How does my HRV compare to last month?',
]

const initialMessages = [
  {
    role: 'user' as const,
    text: 'How was my recovery this week?',
  },
  {
    role: 'assistant' as const,
    text: "Your average HRV was **58ms** this week, up 12% from last week (51ms). Sleep quality improved on 4 of 7 nights, averaging 7h 18min. Your body stress score averaged 28 — well within the optimal range. All signals suggest you're well-recovered and ready for quality training.",
  },
  {
    role: 'user' as const,
    text: "What's my weekly training volume trend?",
  },
  {
    role: 'assistant' as const,
    text: "Over the last 4 weeks, your weekly volume has grown from **32km → 38km → 41km → 47km**, a 47% increase. This is slightly above the recommended 10% weekly ramp rate. I'd suggest capping this week at 48–50km and planning a recovery week (30–35km) in Week 5 to allow adaptation.",
  },
]

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    setMessages((prev) => [
      ...prev,
      { role: 'user', text },
      {
        role: 'assistant',
        text: "This is a beta preview. In the full version, responses will be powered by your real Garmin data and a personalized AI model. Stay tuned!",
      },
    ])
    setInput('')
  }

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-8rem)]">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">AI Coach</h1>
        <p className="text-sm text-gray-500 mt-1">Ask anything about your training, recovery, and performance</p>
      </div>

      <div className="flex-1 flex gap-4 min-h-0">
        {/* Sidebar: example prompts */}
        <div className="hidden lg:flex flex-col w-56 flex-shrink-0 gap-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Example prompts</p>
          {examplePrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => sendMessage(prompt)}
              className="text-left text-sm text-gray-600 px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              {prompt}
            </button>
          ))}
          <p className="text-xs text-gray-400 mt-3 leading-relaxed">
            AI responses will be powered by your real Garmin data in the full version.
          </p>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 pb-2 border-b border-gray-100">
              <BrainCircuit className="h-4 w-4 text-purple-500" />
              <span>Teveles AI Coach — Beta Preview</span>
            </div>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-sm md:max-w-lg px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-sm'
                      : 'bg-gray-100 text-gray-800 rounded-tl-sm'
                  }`}
                >
                  {msg.text.split('**').map((part, i) =>
                    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div className="border-t border-gray-100 p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage(input)
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your training, recovery, sleep..."
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-4">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
