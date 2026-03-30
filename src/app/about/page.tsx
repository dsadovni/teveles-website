import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, ShieldCheck, Gauge, Sparkles } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base font-medium text-blue-600 mb-4">
            Teveles is a fitness and performance analytics platform built by amateur athletes who love data.
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Building the analytics layer<br className="hidden sm:block" /> for serious athletes
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Teveles exists because fitness data is underused. Most athletes have rich Garmin data but lack the tools to understand it deeply.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-500 leading-relaxed">
                  Teveles exists because fitness data is underused. Most athletes have rich Garmin data but lack the tools to understand it deeply. We&apos;re on a mission to change that — turning raw activity data into genuine performance intelligence.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-500 leading-relaxed">
                  We&apos;re building the analytics and AI layer that turns raw activity data into genuine performance insights. We envision a world where every serious athlete — and every coach — has access to the kind of analysis previously reserved for elite programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Built by athletes, for athletes</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Teveles was created by a group of amateur endurance athletes who care deeply about training, recovery, and the stories hidden inside performance data. Like many athletes, we found that raw metrics alone rarely answer the questions that matter most: Why did this workout feel different? How is sleep affecting recovery? What patterns are shaping progress over time?
              </p>
              <p>
                We built Teveles to bring a more thoughtful, analytical approach to training data — combining structured metrics, trend analysis, and modern AI tools to turn complex performance signals into practical insight. Our goal is to make that approach available not only to data-driven athletes like us, but also to coaches and training communities who want a clearer, more actionable view of performance.
              </p>
              <p>
                Teveles is designed to help athletes and coaches move beyond isolated numbers and toward a deeper understanding of training load, recovery, consistency, and long-term progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our values</h2>
            <p className="text-gray-500">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Privacy',
                desc: 'Your health data is yours. We collect only what we need, store it securely, and never sell it. Users can delete their data at any time.',
                color: 'bg-emerald-50 text-emerald-600',
              },
              {
                icon: Gauge,
                title: 'Accuracy',
                desc: 'We believe in honest analytics. We don\'t exaggerate metrics or show feel-good numbers. Every insight we surface is grounded in your actual data.',
                color: 'bg-blue-50 text-blue-600',
              },
              {
                icon: Sparkles,
                title: 'Simplicity',
                desc: 'Powerful analytics shouldn\'t require a PhD. We work hard to surface insights in clear, accessible language that any athlete can act on.',
                color: 'bg-purple-50 text-purple-600',
              },
            ].map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${value.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Beta note */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Where we are today</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Teveles is currently in private beta. We&apos;re working closely with a small group of early athletes to refine the platform before a broader launch. If you&apos;re interested in joining, reach out at{' '}
            <a href="mailto:info@teveles.app" className="text-blue-600 hover:underline">info@teveles.app</a>.
          </p>
        </div>
      </section>
    </div>
  )
}
