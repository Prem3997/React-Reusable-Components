import React from 'react'
import { Bar, Doughnut, HorizontalBar, Polar, Radar } from 'react-chartjs-2'
import {
    barChartData, barChartOptions, radarOptions,
    doughnutData, polarData,
    polarOptions, doughnutOptions,
    radarData, horizontalBarData,
    horizontalBarOptions
} from './ChartDataProps'
export const barChart = <Bar
    data={barChartData}
    options={barChartOptions}
/>
export const radarChart = <Radar
    data={radarData}
    options={radarOptions}
/>
export const doughnutChart = <Doughnut
    data={doughnutData}
    options={doughnutOptions}
/>
export const polarChart = <Polar
    data={polarData}
    options={polarOptions}
/>
export const horizontalBarChart = <HorizontalBar
    data={horizontalBarData}
    options={horizontalBarOptions}
/>