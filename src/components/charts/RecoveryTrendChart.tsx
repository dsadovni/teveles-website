'use client'

import PlotlyChart from './PlotlyChart'
import type { Data, Layout } from 'plotly.js'

const days = Array.from({ length: 14 }, (_, i) => `Day ${i + 1}`)
const hrv = [52, 58, 55, 63, 60, 45, 48, 65, 70, 68, 62, 72, 75, 71]

const data: Data[] = [
  {
    x: days,
    y: hrv,
    type: 'scatter',
    mode: 'lines+markers',
    line: { color: '#10B981', width: 2.5, shape: 'spline' },
    marker: { color: '#10B981', size: 6 },
    name: 'HRV (ms)',
    fill: 'tozeroy',
    fillcolor: 'rgba(16,185,129,0.08)',
  },
]

const layout: Partial<Layout> = {
  xaxis: {
    showgrid: false,
    tickfont: { size: 11 },
  },
  yaxis: {
    showgrid: true,
    gridcolor: '#F3F4F6',
    ticksuffix: 'ms',
    tickfont: { size: 11 },
    range: [40, 80],
  },
  showlegend: false,
}

export default function RecoveryTrendChart() {
  return (
    <PlotlyChart
      data={data}
      layout={layout}
      className="w-full h-64"
    />
  )
}
