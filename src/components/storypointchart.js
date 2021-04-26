import React, { Component } from 'react'
import axios from 'axios'
import { Line, Pie, Bar, Doughnut, Polar, Radar } from 'react-chartjs-2'

const api = 'https://teamp.yumusak.dev:443/performance?Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJUaGlzSXNKdXN0U29tZUR1bW15SUQiLCJuYW1lIjoiQ2FuIFl1bXVzYWsiLCJpYXQiOjE1MTYyMzkwMjJ9.sqcx8dgQr4M68eicWJTB15_D8MhKCnFf6lCNk3ek8-4&user='

export default class StoryPointChart extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    let foo = {
      options: {
        labels: [],
        datasets: [
          {
            label: 'Story Point Chart',
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            hoverBackgroundColor: 'rgba(230, 236, 235, 0.75)',
            hoverBorderColor: 'rgba(230, 236, 235, 0.75)',
          },
        ],
      },
    }
    this.setState(foo)

    const user = this.props.queriedUser
    console.log(user)
    const result = await axios.get(api.concat(user))
    const newData = result.data.sprintResult.map(obj => {
      return obj.storyPoints
    })

    const labels = result.data.sprintResult.map(obj => {
      const date = new Date(Date.parse(obj.startDate))
      return date.toLocaleString('de-DE', {
        day: '2-digit',
        month: '2-digit',
      })
    })

    foo.options.datasets[0].data = newData
    foo.options.labels = labels
    this.setState(foo)
  }


  render() {
    let cur = { ...this.state }

    return (
      <div className='border-1 cspan'>
        <div className='chart'>
          <div className='d200 boxshadow'>
            <Line data={cur.options} redraw />
          </div>
        </div>
      </div>
    )
  }
}
