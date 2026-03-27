'use client'

import PlotlyChart from './PlotlyChart'
import type { Data, Layout } from 'plotly.js'

const runs = ['Run 1', 'Run 2', 'Run 3', 'Run 4', 'Run 5', 'Run 6', 'Run 7', 'Run 8', 'Run 9', 'Run 10']
const paces = [5.8, 5.6, 5.9, 5.4, 5.7, 5.2, 5.5, 5.1, 5.3, 5.0]

const data: Data[] = [
  {
    x: runs,
    y: paces,
    type: 'scatter',
    mode: 'lines+markers',
    line: { color: '#2563EB', width: 2.5, shape: 'spline' },
    marker: { color: '#2563EB', size: 6 },
    name: 'Pace (min/km)',
    fill: 'tozeroy',
    fillcolor: 'rgba(37,99,235,0.08)',
  },
]

const layout: Partial<Layout> = {
  xaxis: {
    showgrid: false,
    tickfont: { size: 11 },
  },
  yaxis: {
    autorange: 'reversed',
    showgrid: true,
    gridcolor: '#F3F4F6',
    ticksuffix: ' /km',
    tickfont: { size: 11 },
    range: [6.5, 4.5],
  },
  showlegend: false,
}

export default function PaceTrendChart() {
  return (
    <PlotlyChart
      data={data}
      layout={layout}
      className="w-full h-64"
    />
  )
}
