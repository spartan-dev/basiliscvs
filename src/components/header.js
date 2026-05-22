import React from "react"
import stormIntro from "../video/stormPRO.mp4"
import "../styles/index.css"

const scrollToContact = e => {
  e.preventDefault()
  const el = document.getElementById("contact")
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

const Header = () => (
  <div className="hero-container">
    <video autoPlay loop muted playsInline>
      <source src={stormIntro} type="video/mp4" />
    </video>

    <div className="hero-overlay" />

    <div className="hero-content">
      <p className="hero-tagline">Neo Folk Medieval</p>
      <h1 className="hero-title">FERAVICANUS</h1>
      <div className="hero-btns">
        <a
          href="#contact"
          className="hero-btn hero-btn--primary"
          onClick={scrollToContact}
        >
          Contrataciones
        </a>
        <a
          href="https://www.youtube.com/channel/UCMNGc5s7Gmzxrm0X1GYsQHg"
          className="hero-btn hero-btn--outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube <i className="fas fa-play-circle" />
        </a>
      </div>
    </div>
  </div>
)

export default Header
