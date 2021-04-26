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
        <InfoRoute path="user/:queriedUser" />
      </Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Can Yumusak</title>
      </Helmet>
    </div>
  )
}


export default index
