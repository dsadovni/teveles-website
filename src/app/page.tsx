import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/lib/button-variants'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  BarChart2,
  BrainCircuit,
  Lock,
  Watch,
  CheckCircle2,
  TrendingUp,
  Heart,
  Moon,
  Zap,
} from 'lucide-react'
import WeeklyMileageChart from '@/components/charts/WeeklyMileageChart'
import HeartRateZonesChart from '@/components/charts/HeartRateZonesChart'

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-5 text-blue-600 border-blue-200 bg-blue-50 px-3 py-1">
            Now in Private Beta
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            Understand your body.<br className="hidden sm:block" />
            <span className="text-blue-600"> Train smarter.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Teveles connects your Garmin data to powerful analytics and AI coaching insights — giving you a clear picture of your training, recovery, and progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'bg-blue-600 hover:bg-blue-700 text-white px-8')}>
              Join the Beta
            </Link>
            <Link href="#how-it-works" className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'px-8')}>
              See How It Works
            </Link>
          </div>

          {/* Floating metric cards */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: TrendingUp, label: 'Weekly Distance', value: '42.3 km', color: 'text-blue-600' },
              { icon: Heart, label: 'Avg Heart Rate', value: '148 bpm', color: 'text-red-500' },
              { icon: Moon, label: 'Sleep Score', value: '82/100', color: 'text-indigo-500' },
              { icon: Zap, label: 'HRV (avg)', value: '58 ms', color: 'text-emerald-500' },
            ].map((metric) => {
              const Icon = metric.icon
              return (
                <Card key={metric.label} className="border border-gray-200 shadow-sm bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4 flex flex-col items-center gap-1">
                    <Icon className={`h-5 w-5 ${metric.color}`} />
                    <p className="text-xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-xs text-gray-500 text-center">{metric.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Three simple steps from your wrist to your insights.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Garmin',
                desc: 'Sync your Garmin activity and health data securely through the official Garmin Health API.',
                icon: Watch,
              },
              {
                step: '02',
                title: 'Teveles Analyzes',
                desc: 'Our platform processes your metrics — sleep, HRV, pace, power, nutrition — into meaningful trends.',
                icon: BarChart2,
              },
              {
                step: '03',
                title: 'Get Insights',
                desc: 'Receive daily AI-powered reports, trend charts, and personalized recommendations.',
                icon: BrainCircuit,
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md">
                    {item.step}
                  </div>
                  <Icon className="h-6 w-6 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Athletes */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why athletes use Teveles</h2>
            <p className="text-gray-500 max-w-xl mx-auto">More than a fitness tracker. A genuine performance analytics platform.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart2,
                title: 'Deep Analytics',
                desc: 'Go beyond basic stats. See pace trends, training load, zone distribution, and recovery patterns over time.',
                color: 'bg-blue-50 text-blue-600',
              },
              {
                icon: BrainCircuit,
                title: 'AI Insights',
                desc: 'Ask questions, get summaries, and receive personalized advice from your AI fitness coach — trained on your data.',
                color: 'bg-purple-50 text-purple-600',
              },
              {
                icon: Lock,
                title: 'Privacy First',
                desc: 'Your data stays yours. We never sell or share your personal health data with third parties.',
                color: 'bg-emerald-50 text-emerald-600',
              },
              {
                icon: Watch,
                title: 'Built for Garmin',
                desc: 'Seamless integration with the Garmin ecosystem you already use — no manual imports or third-party sync required.',
                color: 'bg-orange-50 text-orange-600',
              },
            ].map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your fitness data, finally making sense</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              The Teveles dashboard brings together all your Garmin metrics in one clean, actionable view.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 shadow-lg bg-gray-50 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-200 border-b border-gray-300">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400">app.teveles.app/dashboard</div>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Weekly Distance', value: '42.3 km' },
                { label: 'Avg Pace', value: '5:12 /km' },
                { label: 'Avg Heart Rate', value: '148 bpm' },
                { label: 'Sleep Score', value: '82/100' },
              ].map((m) => (
                <div key={m.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
                  <p className="text-2xl font-bold text-gray-900">{m.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Weekly Distance</p>
                <WeeklyMileageChart />
              </div>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">HR Zone Distribution</p>
                <HeartRateZonesChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your personal AI fitness coach</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Ask Teveles anything about your training. Get instant, data-backed insights about your performance, recovery, and trends.
              </p>
              <ul className="space-y-3">
                {[
                  'Personalized recovery recommendations',
                  'Weekly training load summaries',
                  'Sleep and HRV trend analysis',
                  'Pacing strategy for upcoming races',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Mock chat */}
            <div className="rounded-2xl border border-gray-200 shadow-md bg-white overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 text-sm font-medium text-gray-600">
                AI Coach
              </div>
              <div className="p-4 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-xs">
                    How was my recovery this week?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-xs leading-relaxed">
                    Your average HRV was <strong>58ms</strong> this week, up 12% from last week. Sleep quality improved on 4 of 7 nights. Your body is showing good adaptation.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-xs">
                    What&apos;s my training volume trend?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-xs leading-relaxed">
                    Over the last 4 weeks, your weekly volume increased from <strong>32km to 47km</strong> (+47%). Consider a recovery week soon.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We take your data seriously</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-10">
            Your health data is sensitive. We built Teveles with privacy as a core design principle, not an afterthought.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'End-to-end encryption',
                desc: 'All data in transit and at rest is encrypted using industry-standard protocols.',
              },
              {
                title: 'We never sell your data',
                desc: 'Your health metrics are never sold to advertisers, insurers, or any third party.',
              },
              {
                title: 'User-controlled deletion',
                desc: 'Delete your account and all associated data at any time, permanently and immediately.',
              },
            ].map((point) => (
              <div key={point.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <CheckCircle2 className="h-6 w-6 text-emerald-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-sm text-gray-500">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to train smarter?</h2>
          <p className="text-blue-200 max-w-xl mx-auto mb-8 text-lg">
            Join our private beta and be among the first athletes to experience Teveles.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg', variant: 'secondary' }), 'bg-white text-blue-600 hover:bg-blue-50 px-8 font-semibold')}>
            Join the Beta
          </Link>
          <p className="mt-4 text-blue-300 text-sm">
            Questions? Reach us at{' '}
            <a href="mailto:info@teveles.app" className="underline hover:text-white">info@teveles.app</a>
          </p>
        </div>
      </section>
    </div>
  )
}
