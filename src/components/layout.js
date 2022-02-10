/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import "./layout.css"
import Navbar from "./navbar"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  )
}

export default Layout
