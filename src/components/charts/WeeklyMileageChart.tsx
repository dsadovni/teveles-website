'use client'

import PlotlyChart from './PlotlyChart'
import type { Data, Layout } from 'plotly.js'

const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8']
const distances = [32, 28, 45, 38, 52, 41, 47, 43]

const data: Data[] = [
  {
    x: weeks,
    y: distances,
    type: 'bar',
    marker: {
      color: '#2563EB',
      opacity: 0.85,
    },
    name: 'Distance (km)',
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
    ticksuffix: ' km',
    tickfont: { size: 11 },
  },
  showlegend: false,
}

export default function WeeklyMileageChart() {
  return (
    <PlotlyChart
      data={data}
      layout={layout}
      className="w-full h-64"
    />
  )
}
