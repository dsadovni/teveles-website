'use client'

import PlotlyChart from './PlotlyChart'
import type { Data, Layout } from 'plotly.js'

const labels = ['Zone 1 (Recovery)', 'Zone 2 (Aerobic)', 'Zone 3 (Tempo)', 'Zone 4 (Threshold)', 'Zone 5 (VO2 Max)']
const values = [15, 35, 30, 15, 5]
const colors = ['#9CA3AF', '#10B981', '#F59E0B', '#F97316', '#EF4444']

const data: Data[] = [
  {
    labels,
    values,
    type: 'pie',
    hole: 0.55,
    marker: { colors },
    textinfo: 'percent',
    textfont: { size: 12 },
    hovertemplate: '%{label}<br>%{percent}<extra></extra>',
  },
]

const layout: Partial<Layout> = {
  showlegend: true,
  legend: {
    orientation: 'v',
    font: { size: 11 },
    x: 1,
    y: 0.5,
  },
  margin: { t: 20, b: 20, l: 20, r: 20 },
}

export default function HeartRateZonesChart() {
  return (
    <PlotlyChart
      data={data}
      layout={layout}
      className="w-full h-64"
    />
  )
}
