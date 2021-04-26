import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

export default function Intent({ children, to }) {
  return (
    <Link
      fade
      duration={0.1}
      className="nav-link"
      to={to}
      activeStyle={{
        color: "white"
      }}
      style={{
        color: "grey"
      }}
    >
      {children}
    </Link>
  )
}
