'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { User, Ruler, Utensils, Globe, ShieldAlert } from 'lucide-react'

export default function SettingsPage() {
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric')
  const [profile, setProfile] = useState({ name: 'Dima', email: 'dima@teveles.com' })
  const [body, setBody] = useState({ height: '178', weight: '72' })
  const [nutrition, setNutrition] = useState({ calories: '2400', protein: '160', carbs: '240', fat: '80' })
  const [locale, setLocale] = useState({ timezone: 'America/New_York', language: 'English' })
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your profile, units, and preferences</p>
      </div>

      {/* Profile */}
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <User className="h-4 w-4 text-blue-600" />
            Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-xl font-bold text-blue-600">{profile.name[0]}</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">{profile.name}</p>
              <p className="text-sm text-gray-500">{profile.email}</p>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-1 gap-4 pt-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
              <input
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <input
                value={profile.email}
                readOnly
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-500 cursor-not-allowed"
              />
              <p className="text-xs text-gray-400 mt-1">Email cannot be changed in beta</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Units */}
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Ruler className="h-4 w-4 text-blue-600" />
            Units
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            {(['metric', 'imperial'] as const).map((u) => (
              <button
                key={u}
                onClick={() => setUnits(u)}
                className={`px-5 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  units === u
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                }`}
              >
                {u === 'metric' ? 'Metric (km, kg)' : 'Imperial (mi, lbs)'}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Body Metrics */}
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Ruler className="h-4 w-4 text-emerald-600" />
            Body Metrics
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Height ({units === 'metric' ? 'cm' : 'in'})
            </label>
            <input
              value={body.height}
              onChange={(e) => setBody({ ...body, height: e.target.value })}
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Weight ({units === 'metric' ? 'kg' : 'lbs'})
            </label>
            <input
              value={body.weight}
              onChange={(e) => setBody({ ...body, weight: e.target.value })}
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </CardContent>
      </Card>

      {/* Nutrition */}
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Utensils className="h-4 w-4 text-orange-500" />
            Nutrition Targets
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Daily Calorie Target (kcal)</label>
            <input
              value={nutrition.calories}
              onChange={(e) => setNutrition({ ...nutrition, calories: e.target.value })}
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {[
            { key: 'protein', label: 'Protein (g)' },
            { key: 'carbs', label: 'Carbohydrates (g)' },
            { key: 'fat', label: 'Fat (g)' },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">{field.label}</label>
              <input
                value={nutrition[field.key as keyof typeof nutrition]}
                onChange={(e) => setNutrition({ ...nutrition, [field.key]: e.target.value })}
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Timezone & Language */}
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Globe className="h-4 w-4 text-blue-600" />
            Timezone &amp; Language
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Timezone</label>
            <select
              value={locale.timezone}
              onChange={(e) => setLocale({ ...locale, timezone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {[
                'America/New_York', 'America/Los_Angeles', 'America/Chicago',
                'Europe/London', 'Europe/Berlin', 'Europe/Paris',
                'Asia/Tokyo', 'Asia/Singapore', 'Australia/Sydney',
              ].map((tz) => (
                <option key={tz}>{tz}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Language</label>
            <select
              value={locale.language}
              onChange={(e) => setLocale({ ...locale, language: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {['English', 'Spanish', 'French', 'German', 'Japanese'].map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Save button */}
      <div className="flex items-center gap-3">
        <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white">
          Save Changes
        </Button>
        {saved && <span className="text-sm text-emerald-600 font-medium">Saved successfully!</span>}
      </div>

      {/* Data & Privacy */}
      <Card className="border border-red-200 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base text-red-700">
            <ShieldAlert className="h-4 w-4" />
            Data &amp; Privacy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Request Data Export</p>
              <p className="text-xs text-gray-500">Download all your Teveles data as JSON</p>
            </div>
            <Button variant="outline" size="sm">Request Export</Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-700">Delete Account</p>
              <p className="text-xs text-gray-500">Permanently delete your account and all data</p>
            </div>
            <Button variant="destructive" size="sm">Delete Account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
