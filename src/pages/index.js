import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info from "../components/info"
import { Helmet } from "react-helmet"
import { Router, useLocation } from "@reach/router"

const Index = () => {
  return (
    <div>
      <Appbar />
      <Router>
        <Info default path="/" queriedUser="yumusak" />
        <Info path="user/:queriedUser" />
      </Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Can Yumusak</title>
      </Helmet>
    </div>
  )
}


export default Index
