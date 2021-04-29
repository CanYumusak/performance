import React from "react"
import PerformanceLineChart from "./performanceLineChart"

const info = (props) => {
  return (
    <div className="container">
      <div className="display-3" style={{ color: "#FF8A00" }}>
      </div>

      <div className="h1 code mt-4 mb-3">{"Story Point"}</div>
      <PerformanceLineChart
        type="performance"
        queriedUser={props.queriedUser} />

      <div className="col-12 mb-sm-3" style={{ height: "40px" }} />

      <div className="h1 code mt-20 mb-3">{"Bugs"}</div>
      <PerformanceLineChart
        type="bugs"
        queriedUser={props.queriedUser} />
    </div>
  )
}

export default info