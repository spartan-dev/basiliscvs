import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { isBrowser } from "../../utils"
import SkullIcon from "../../images/svg/BASILISCUS_CRANEO2.inline.svg"
import Button from "../button"
import "./navbar.css"
function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = e => setClick(false)
  const showButton = () => {
    if (!isBrowser) {
      return
    } else {
      if (window.innerWidth <= 960) {
        setButton(false)
      } else {
        setButton(true)
      }
    }
  }

  useEffect(() => {
    showButton()
  }, [])
  /*  if (!isBrowser) {
    return
  } else {
    console.log(isBrowser, "si sale")
    window.addEventListener("resize", showButton)
  } */
  typeof window !== "undefined" && window.addEventListener("resize", showButton)
  return (
    <>
      <nav className={click ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <StaticImage
              src="../../images/BASILISCUS_LOGO_TRANSPARENTE.png"
              alt="basiliscus logo"
              placeholder="the serpent"
              layout="fixed"
              width={180}
              height={70}
            />
            {/*   TRVL
            <i className="fab fa-typo3" /> */}
          </Link>
          <div
            className="menu-icon"
            onClick={handleClick}
            onKeyDown={handleClick}
            aria-hidden="true"
          >
            {click ? (
              <i className="fas fa-times" />
            ) : (
              <SkullIcon className="skull-icon" />
            )}
            {/*  <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Eventos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Bios
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://www.facebook.com/basiliscusrex"
                rel="noreferrer"
                target="_blank"
                onClick={closeMobileMenu}
              >
                <span className="nav-links">
                  <i className="fab fa-facebook" />
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.instagram.com/basiliscus_oficial/?hl=en"
                rel="noreferrer"
                target="_blank"
                onClick={closeMobileMenu}
              >
                <span className="nav-links">
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://api.whatsapp.com/send?phone=525586824354"
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
              >
                <span className="nav-links">
                  <i className="fab fa-whatsapp"></i>
                </span>
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Bios</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
