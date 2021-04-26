import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info from "../components/info"
import { Helmet } from "react-helmet"
import { Router, useLocation } from "@reach/router"

const IndexPage = () => {
  const location = useLocation()?.location?.pathname?.replace("/user/", "") || "yumusak"

  return (
    <div>
      <Appbar />
      <Info queriedUser={location} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Can Yumusak</title>
      </Helmet>
    </div>
  )
}

export default IndexPage
