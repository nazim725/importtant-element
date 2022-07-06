import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
const apexData = {
  series: [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'month',
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
}

const ApexLineChart = () => {
  const [state, setState] = useState(apexData)

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
        width={800}
      />
    </div>
  )
}

export default ApexLineChart
