'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Product', href: '/product' },
  { label: 'About', href: '/about' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <Activity className="h-5 w-5 text-blue-600" />
            <span>Teveles</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mb-1" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/app/dashboard"
              className={cn(
                buttonVariants({ size: 'sm' }),
                'bg-blue-600 hover:bg-blue-700 text-white'
              )}
            >
              Open App
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <button
                  aria-label="Open menu"
                  className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
                />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-10">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} render={<span />}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <Link
                  href="/app/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    buttonVariants(),
                    'mt-4 bg-blue-600 hover:bg-blue-700 text-white'
                  )}
                >
                  Open App
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
