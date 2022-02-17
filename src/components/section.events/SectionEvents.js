import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./section.events.css"
const SectionEvents = () => {
  return (
    <section>
      <div className="container">
        <div className="holow"></div>
        <div className="holow"></div>
        <div className="section">
          <div className="header-events">
            <h4 className="header-title">Momentos del ultimos eventos</h4>
            <p className="header-sub">Live from Calle Dolores 2022</p>
          </div>
          <div className="portafolio">
            <div className="portafolio-container">
              <div className="event">
                <p className="paragraph-event">Tenemos imagen</p>
                <StaticImage
                  src="../../images/assets/basili3.jpg"
                  alt="basiliscus logo"
                  placeholder="the serpent"
                  layout="fixed"
                  height={500}
                  width={500}
                />
                <div className="imageContainer">
                  <div className="lazzyload">
                    <figure className="lazzy-figure"></figure>
                  </div>{" "}
                  <div className="image-overlay">
                    <div className="image-state"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionEvents
