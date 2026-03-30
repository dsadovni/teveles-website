import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/lib/button-variants'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, BarChart2, BrainCircuit, TrendingUp, Settings2, ShieldCheck, Lock } from 'lucide-react'
import WeeklyMileageChart from '@/components/charts/WeeklyMileageChart'
import PaceTrendChart from '@/components/charts/PaceTrendChart'

export default function ProductPage() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            A complete picture of your athletic performance
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Teveles integrates with Garmin to deliver deep analytics, AI coaching, and trend insights — all in one platform.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'bg-blue-600 hover:bg-blue-700 text-white px-8')}>
            Join the Beta
          </Link>
        </div>
      </section>

      {/* Data Flow */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">How Teveles works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {[
              { label: 'Garmin Device', sub: 'Your wearable collects activity, sleep, and health data' },
              null,
              { label: 'Teveles Platform', sub: 'We process and analyze your data securely' },
              null,
              { label: 'Your Insights', sub: 'Charts, AI reports, and personalized recommendations' },
            ].map((item, idx) => {
              if (item === null) {
                return (
                  <ArrowRight key={idx} className="h-6 w-6 text-blue-400 flex-shrink-0 rotate-90 md:rotate-0" />
                )
              }
              return (
                <div key={item.label} className="flex-1 max-w-xs text-center p-6 rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-500">{item.sub}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Integrations</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Today, Teveles is focused on Garmin integration to support activity and wellness-based insights for athletes and coaches. We plan to expand support to additional platforms, including COROS and Polar, as the product evolves.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'Garmin', status: 'Current', color: 'bg-blue-50 text-blue-700 border-blue-200' },
                { label: 'COROS', status: 'Planned', color: 'bg-gray-100 text-gray-500 border-gray-200' },
                { label: 'Polar', status: 'Planned', color: 'bg-gray-100 text-gray-500 border-gray-200' },
              ].map(({ label, status, color }) => (
                <div key={label} className={`px-5 py-2.5 rounded-full border text-sm font-medium flex items-center gap-2 ${color}`}>
                  {label}
                  <span className="text-xs opacity-70">({status})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security / Data Flow */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">How data flows through Teveles</h2>
            </div>
            {/* Banner */}
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-6 py-4 mb-8 flex items-start gap-3">
              <Lock className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-emerald-800 text-sm leading-relaxed font-medium">
                Secure by design: authorized data is securely ingested, processed, and transformed into athlete-facing insights.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Teveles securely ingests authorized user data, processes it in protected cloud infrastructure, and uses it to generate dashboards, analytics, and personalized insights.
            </p>
            <p className="text-sm font-semibold text-gray-700 mb-3">We are committed to handling data responsibly:</p>
            <ul className="space-y-3">
              {[
                'Data is transmitted over encrypted connections and stored using secure cloud infrastructure.',
                'We do not store your Garmin login credentials.',
                'Where supported, user connections are authorized through a consent-based integration flow rather than direct credential handling.',
                'Access to user data is restricted to systems and personnel who need it to operate, support, and secure the Service.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 1: Workout Analytics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <BarChart2 className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Workout Analytics</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Deep performance analytics</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Understand every run, ride, and swim at a granular level. Teveles breaks down your pace, heart rate zones, training load, and recovery metrics into clear, actionable charts.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Pace trends per run', 'Training load and stress score', 'Cadence and stride analysis', 'Zone time distribution'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-700 mb-3">Pace Trend — Last 10 Runs</p>
              <PaceTrendChart />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: AI Chat */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Chat mock (left) */}
            <div className="rounded-2xl border border-gray-200 shadow-md bg-white overflow-hidden order-2 md:order-1">
              <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 text-sm font-medium text-gray-600 flex items-center gap-2">
                <BrainCircuit className="h-4 w-4 text-purple-500" />
                Teveles AI Coach
              </div>
              <div className="p-4 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-xs">
                    Analyze my sleep patterns this month
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-sm leading-relaxed">
                    This month you averaged <strong>7h 12min</strong> of sleep with a quality score of <strong>79/100</strong>. Your best sleep nights followed low-intensity training days. I noticed a dip in HRV on your heavy workout weeks — consider adding a recovery day.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-xs">
                    How does my HRV compare to last month?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-sm leading-relaxed">
                    Your avg HRV this month is <strong>58ms vs 51ms</strong> last month — a 14% improvement. This is a strong positive signal. Keep prioritizing sleep and your current training balance.
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                  <BrainCircuit className="h-4 w-4 text-purple-600" />
                </div>
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">AI Assistant</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Chat with your fitness data</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                The Teveles AI coach has full context on your training history, sleep, HRV, and nutrition. Ask it anything and get instant, data-grounded responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Training Trends */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                </div>
                <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">Training Trends</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">See your progress over time</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Weekly mileage, training load trends, and performance baselines — visualized clearly so you can make smarter decisions about your training plan.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-700 mb-3">Weekly Mileage — Last 8 Weeks</p>
              <WeeklyMileageChart />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Account & Personalization */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Settings mockup */}
            <div className="space-y-3 order-2 md:order-1">
              {[
                { label: 'Units', value: 'Metric (km, kg)' },
                { label: 'Daily Calorie Target', value: '2,400 kcal' },
                { label: 'Body Weight', value: '72 kg' },
                { label: 'Timezone', value: 'America/New_York' },
                { label: 'Protein Target', value: '160g / day' },
              ].map((setting) => (
                <Card key={setting.label} className="border border-gray-200 bg-white">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{setting.label}</span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{setting.value}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Settings2 className="h-4 w-4 text-orange-600" />
                </div>
                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Personalization</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tailored to you</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Set your body metrics, nutrition targets, preferred units, and timezone. Teveles uses this context to make its analytics and AI insights more accurate and relevant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data We Analyze */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Data we analyze</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-10">
            Teveles taps into the full breadth of Garmin health and activity data.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Heart Rate', 'HRV (Heart Rate Variability)', 'Sleep Duration', 'Sleep Quality',
              'Steps', 'Calories Burned', 'Active Minutes', 'Pace', 'Distance',
              'Elevation Gain', 'Cadence', 'Stride Length', 'Training Load',
              'VO2 Max Estimate', 'Stress Score', 'Body Battery', 'SpO2',
              'Respiration Rate', 'Weight', 'Hydration',
            ].map((metric) => (
              <span key={metric} className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">
                {metric}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to see it in action?</h2>
          <p className="text-blue-200 mb-8 text-lg">Join the private beta today.</p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg', variant: 'secondary' }), 'bg-white text-blue-600 hover:bg-blue-50 px-8 font-semibold')}>
            Join the Beta
          </Link>
        </div>
      </section>
    </div>
  )
}
