import React from 'react'
import CanvasJSReact from '../../files/canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart
const options = {
  theme: 'light2',
  animationEnabled: true,
  title: {
    text: 'Units Sold VS Profit',
  },
  subtitles: [
    {
      text: 'Click Legend to Hide or Unhide Data Series',
    },
  ],
  axisX: {
    title: 'States',
  },
  axisY: {
    title: 'Units Sold',
    titleFontColor: '#6D78AD',
    lineColor: '#6D78AD',
    labelFontColor: '#6D78AD',
    tickColor: '#6D78AD',
  },

  toolTip: {
    shared: true,
  },
  legend: {
    cursor: 'pointer',
  },
  data: [
    {
      type: 'spline',
      name: 'Units Sold',
      showInLegend: true,

      dataPoints: [
        { label: '0', y: 0 },
        { label: 'January', y: 18 },
        { label: 'February', y: 25 },
        { label: 'March', y: 56},
        { label: 'April', y: 78 },
        { label: 'May', y: 100 },
      ],
    },
    {
      type: 'spline',
      name: 'Profit',
      axisYType: 'secondary',
      showInLegend: true,

      dataPoints: [
        { label: 'January', y: 0 },
        { label: 'February', y: 29 },
        { label: 'March', y: 40 },
        { label: 'April', y: 34 },
        { label: 'May', y: 24 },
      ],
    },
  ],
}

const Graph = () => {
  return (
    <div>
      <CanvasJSChart options={options} />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  )
}

export default Graph
