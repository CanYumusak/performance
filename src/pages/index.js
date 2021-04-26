import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info from "../components/info"
import { Helmet } from "react-helmet"

function index(props) {
  console.log(props.location)
  const user = location.path.pathname || "yumusak"
  return (
    <div>
      <Appbar />
      <Info
        queriedUser={user}
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Can Yumusak</title>
      </Helmet>
    </div>
  )
}

export default index
