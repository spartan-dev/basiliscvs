/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SkullIcon from "../images/assets/BASILISCUS_CRANEO1.inline.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import Header from "./header"
import "./layout.css"
const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="relative min-h-screen md:flex">
        {/* mobile menu bar */}
        <div className="bg-transparent text-gray-100 flex justify-between md:hidden">
          <div>
            {/* logo */}
            <Link
              to="/"
              className="text-white flex items-center space-x-2 px-4"
            >
              <StaticImage
                src="../images/BASILISCUS_LOGO_TRANSPARENTE.png"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="basiliscus logo"
                className=""
              />
            </Link>
          </div>
          {/* mobile menu button */}
          <div className="flex">
            <button
              onClick={() => setVisible(!visible)}
              className=" p-4 focus:outline-none"
            >
              hola
            </button>
          </div>
        </div>
        {/* sidebar */}
        <div
          className={`  bg-transparent text-basipurple 
           w-64 space-y-6 py-3 absolute
           px-2   inset-y-0 left-0 
           transform ${visible ? "-translate-x-full" : ""}  
           md:relative md:translate-x-0 transition duration-200 ease-in-out`}
        >
          <Link to="/" className="text-white flex items-center space-x-2 px-4">
            <StaticImage
              src="../images/BASILISCUS_LOGO_TRANSPARENTE.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="basiliscus logo"
              className=""
            />
          </Link>

          <nav>
            <Link
              to="/"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-basigrey2 hover:text-basired"
            >
              Home
            </Link>
            <Link
              to="/"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-basigrey2 hover:text-basired"
            >
              About
            </Link>
            <Link
              to="/"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-basigrey2 hover:text-basired"
            >
              Features
            </Link>
            <Link
              to="/"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-basigrey2 hover:text-basired"
            >
              Pricing
            </Link>
          </nav>
        </div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
