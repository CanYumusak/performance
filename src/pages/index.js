import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info from "../components/info"
import { Helmet } from "react-helmet"
import { Router } from "@reach/router"

function index() {
  return (
    <div>
      <Appbar />
      <Router>
        <InfoRoute />
      </Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Can Yumusak</title>
      </Helmet>
    </div>
  )
}

const InfoRoute = ({ component: Component, location, ...rest }) => {
  const user = location.pathname.replace("/user/", "")
  return <Info
    queriedUser={user}
  />
}


export default index
