import type { Metadata } from 'next'
import AppSidebar from '@/components/layout/AppSidebar'
import { AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teveles App',
  description: 'Your Teveles athlete dashboard',
}

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Beta notice */}
        <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 border-b border-amber-200 text-amber-800 text-sm">
          <AlertTriangle className="h-4 w-4 flex-shrink-0" />
          <span>Beta Preview — Some features are under development</span>
        </div>
        <main className="flex-1 p-6 pb-20 md:pb-6">
          {children}
        </main>
      </div>
    </div>
  )
}
