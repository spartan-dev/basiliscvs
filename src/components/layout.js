/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faList } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import Header from "./header"
import "./layout.css"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <nav className="navbar">
        <div className="sectionNav">
          <ul className="list">
            {/*  <li>
              <FontAwesomeIcon icon={faList} size="2x" />
            </li> */}
          </ul>
        </div>
        <div className="sectionNav">
          <div className="socialMedia">
            <a href="https://www.facebook.com/basiliscusrex">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="https://www.instagram.com/basiliscus_oficial/">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5586824354">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto flex-1 justify-center items-center">
        <h1 className="mt-4 text-xl font-bold sm:text-xl text-red-500 hover:text-red-600">
          Aun seguimos en contruccion
        </h1>
      </div>
      <p className="mt-4 pl-4  text-xl font-bold sm:text-2xl text-white hover:text-red-600">
        Pero puedes visitarnos por el momento en nuestras redes{" "}
      </p>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
