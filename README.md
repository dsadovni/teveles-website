# Teveles Website

Marketing + app-shell website for the Teveles fitness analytics platform.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, shadcn/ui (base-ui), and Plotly.js.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Production

### Vercel (recommended)

```bash
npm install -g vercel
vercel --prod
```

Or connect the repo in Vercel dashboard — it will auto-deploy on push to `main`.

### Other (Node server)

```bash
npm run build
npm start
```

---

## Where to Change Text and Content

| What to change | File |
|---|---|
| Homepage headline, sections, CTAs | `src/app/page.tsx` |
| Product feature descriptions | `src/app/product/page.tsx` |
| About / founder story | `src/app/about/page.tsx` |
| Privacy policy | `src/app/privacy/page.tsx` |
| Terms of service | `src/app/terms/page.tsx` |
| Contact page and form subjects | `src/app/contact/page.tsx` |
| Site-wide nav links | `src/components/layout/Navbar.tsx` |
| Footer links and description | `src/components/layout/Footer.tsx` |
| Dashboard metrics and activity table | `src/app/app/dashboard/page.tsx` |
| Chat example prompts and messages | `src/app/app/chat/page.tsx` |
| Settings defaults | `src/app/app/settings/page.tsx` |
| Global site title and description | `src/app/layout.tsx` |

---

## Where to Replace Placeholder Charts

All charts live in `src/components/charts/`. Replace the demo data arrays with real API calls:

- `WeeklyMileageChart.tsx` — bar chart of weekly km totals
- `PaceTrendChart.tsx` — line chart of per-run pace
- `HeartRateZonesChart.tsx` — donut chart of HR zone distribution
- `RecoveryTrendChart.tsx` — line chart of daily HRV
- `PlotlyChart.tsx` — base wrapper (handles SSR-safe dynamic import)

---

## Where to Add Authentication

Add auth middleware at `src/app/app/layout.tsx`. Before the return statement, check for a session and redirect to a login page if unauthenticated.

Example:

```typescript
// src/app/app/layout.tsx (server component)
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth' // your auth helper

export default async function AppLayout({ children }) {
  const session = await getSession()
  if (!session) redirect('/contact')
  // rest of layout
}
```

---

## Where to Add Backend Contact Form

The contact form at `src/app/contact/page.tsx` simulates submission client-side. To wire it to a real backend:

1. Create a route handler at `src/app/api/contact/route.ts`
2. In the form's `handleSubmit`, POST to `/api/contact`
3. The route handler can forward to Resend, SendGrid, or any email API

---

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout (Navbar + Footer)
    page.tsx            # Home /
    product/page.tsx    # /product
    about/page.tsx      # /about
    privacy/page.tsx    # /privacy
    terms/page.tsx      # /terms
    contact/page.tsx    # /contact
    app/
      layout.tsx        # App shell (sidebar, beta banner)
      dashboard/page.tsx
      chat/page.tsx
      settings/page.tsx
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      AppSidebar.tsx
    ui/                 # shadcn components
    charts/             # Plotly chart wrappers
  lib/
    utils.ts
    button-variants.ts  # CVA variants (server-safe, no "use client")
```
