'use client'

import dynamic from 'next/dynamic'
import type { Data, Layout, Config } from 'plotly.js'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

interface PlotlyChartProps {
  data: Data[]
  layout?: Partial<Layout>
  config?: Partial<Config>
  className?: string
}

export default function PlotlyChart({ data, layout, config, className }: PlotlyChartProps) {
  const defaultLayout: Partial<Layout> = {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { t: 20, b: 40, l: 50, r: 20 },
    font: { family: 'Inter, sans-serif', size: 12, color: '#6B7280' },
    ...layout,
  }

  const defaultConfig: Partial<Config> = {
    responsive: true,
    displayModeBar: false,
    ...config,
  }

  return (
    <div className={className}>
      <Plot
        data={data}
        layout={defaultLayout}
        config={defaultConfig}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler
      />
    </div>
  )
}
