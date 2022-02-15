import * as React from "react"
import PropTypes from "prop-types"

import Button from "./button"
import "../styles/index.css"
//const stormIntro = require("../video/stormPRO.mp4")
import stormIntro from "../video/stormPRO.mp4"
const Header = ({ siteTitle }) => (
  <div className="hero-container">
    <video preload="auto" autoPlay={true} loop={true} muted={true}>
      <source src={stormIntro} type="video/mp4" />
      Your browser does not support HTML5 video
    </video>
    <h1>Surge, cane et salta.</h1>
    <h1 className="for-mobil">Basiliscus</h1>
    <p className="for-mobil">Surge, cane et salta. </p>
    {/*levantate, canta y salta. Grita desde tu corazon y regocijate */}
    <div className="hero-btns">
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        {/* mandar a el apartado de ventas */}
        Lets Rock
      </Button>

      <Button
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
        external={true}
        location={"https://www.youtube.com/channel/UCMNGc5s7Gmzxrm0X1GYsQHg"}
      >
        {/* enviar al canal de youtube */}
        watch trailer
        <i className="fas fa-play-circle" />
      </Button>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
