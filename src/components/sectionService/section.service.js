import React from "react"
import SkullIcon from "../../images/svg/BASILISCUS_CRANEO2.inline.svg"
import "./section.service.css"
const SectionService = () => {
  return (
    <section className="section-base-container">
      <div className="bigspace">
        <div className="inner-container">
          <h4 className="section-header">Nuestros Servicios</h4>
          <div className="mini-cards">
            <div className="service-card">
              <div className="card-container">
                <div className="card-header">
                  <div className="circle">
                    <div className="circle-style">
                      <SkullIcon className="skull-icon" />
                    </div>
                  </div>
                </div>
                <div className="card-separator"></div>
                <div className="card-body">
                  <h6 className="sm-word-wrap card-title">Fiesta Privadas</h6>
                  <p className="card-paragraph">
                    Podemos tocar en tu fiesta privada y animar a nuestro estilo
                  </p>
                </div>
              </div>
            </div>
            <div className="service-card">
            <div className="card-container">
                <div className="card-header">
                  <div className="circle">
                    <div className="circle-style">
                      <SkullIcon className="skull-icon" />
                    </div>
                  </div>
                </div>
                <div className="card-separator"></div>
                <div className="card-body">
                  <h6 className="sm-word-wrap card-title">Eventos Sociales</h6>
                  <p className="card-paragraph">
                  Participamos en eventos al aire libre y podemos colaborar con otros grupos
                  </p>
                </div>
              </div>
            </div>
            <div className="service-card">
            <div className="card-container">
                <div className="card-header">
                  <div className="circle">
                    <div className="circle-style">
                      <SkullIcon className="skull-icon" />
                    </div>
                  </div>
                </div>
                <div className="card-separator"></div>
                <div className="card-body">
                  <h6 className="sm-word-wrap card-title">Musica en sitio</h6>
                  <p className="card-paragraph">
                  También podemos interpretar música en tu bar , restaurante o lugar especial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionService
