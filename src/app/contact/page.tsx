'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Mail } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Beta Interest',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-16 md:py-24">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Message received!</h1>
          <p className="text-gray-500 mb-6">
            Thanks for reaching out. We&apos;ll get back to you at <strong>{form.email}</strong> within 1–2 business days.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSubmitted(false)
              setForm({ name: '', email: '', subject: 'Beta Interest', message: '' })
            }}
          >
            Send another message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Left col */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in touch</h1>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Have questions about Teveles? Interested in joining the beta? We&apos;d love to hear from you.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-5 w-5 text-blue-600" />
              <a href="mailto:hello@teveles.com" className="text-blue-600 hover:underline text-sm">
                hello@teveles.com
              </a>
            </div>

            <div className="space-y-4 mt-8">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-sm font-medium text-blue-800 mb-1">Garmin Partnership Inquiries</p>
                <p className="text-xs text-blue-600">
                  For Garmin partnership and API inquiries, please select &quot;Partnership&quot; as the subject.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-sm font-medium text-gray-800 mb-1">Private Beta</p>
                <p className="text-xs text-gray-500">
                  Currently in private beta. Join our waitlist for early access by filling out this form.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option>Beta Interest</option>
                      <option>Partnership</option>
                      <option>Press</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about yourself or your inquiry..."
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
