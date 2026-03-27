import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Heart, Moon, Zap } from 'lucide-react'
import WeeklyMileageChart from '@/components/charts/WeeklyMileageChart'
import HeartRateZonesChart from '@/components/charts/HeartRateZonesChart'

const metrics = [
  { label: 'Weekly Distance', value: '42.3 km', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Avg Pace', value: '5:12 /km', icon: Zap, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Avg Heart Rate', value: '148 bpm', icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
  { label: 'Sleep Score', value: '82/100', icon: Moon, color: 'text-indigo-600', bg: 'bg-indigo-50' },
]

const activities = [
  { date: 'Mar 25', type: 'Run', distance: '10.2 km', duration: '53:04', hr: '152 bpm' },
  { date: 'Mar 23', type: 'Run', distance: '8.5 km', duration: '44:12', hr: '148 bpm' },
  { date: 'Mar 21', type: 'Long Run', distance: '18.1 km', duration: '1:38:45', hr: '145 bpm' },
  { date: 'Mar 19', type: 'Tempo Run', distance: '7.0 km', duration: '33:21', hr: '165 bpm' },
  { date: 'Mar 17', type: 'Easy Run', distance: '6.3 km', duration: '36:50', hr: '138 bpm' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Your performance overview — last 7 days</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m) => {
          const Icon = m.icon
          return (
            <Card key={m.label} className="border border-gray-200 shadow-sm">
              <CardContent className="p-5">
                <div className={`w-9 h-9 rounded-lg ${m.bg} flex items-center justify-center mb-3`}>
                  <Icon className={`h-4 w-4 ${m.color}`} />
                </div>
                <p className="text-2xl font-bold text-gray-900">{m.value}</p>
                <p className="text-xs text-gray-500 mt-1">{m.label}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-gray-800">Weekly Mileage</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <WeeklyMileageChart />
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-gray-800">HR Zone Distribution</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <HeartRateZonesChart />
          </CardContent>
        </Card>
      </div>

      {/* Activity Table */}
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold text-gray-800">Recent Activities</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                  <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Type</th>
                  <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Distance</th>
                  <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Duration</th>
                  <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Avg HR</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((a, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-3 text-gray-600">{a.date}</td>
                    <td className="py-3 px-3 font-medium text-gray-900">{a.type}</td>
                    <td className="py-3 px-3 text-gray-600">{a.distance}</td>
                    <td className="py-3 px-3 text-gray-600">{a.duration}</td>
                    <td className="py-3 px-3 text-gray-600">{a.hr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
