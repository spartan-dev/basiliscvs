import React from "react"
import SkullIcon from "../../images/svg/BASILISCUS_CRANEO2.inline.svg"
import "./section.service.css"
const SectionService = () => {
  return (
    <section id="services" className="section-base-container">
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
                  <h6 className="sm-word-wrap card-title">Festivales & Ferias Medievales</h6>
                  <p className="card-paragraph">
                    Llevamos nuestro ritual sonoro a festivales al aire libre y ferias medievales.
                    Una presencia que impone, que invoca y que no se olvida.
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
                  <h6 className="sm-word-wrap card-title">Bodas & Celebraciones</h6>
                  <p className="card-paragraph">
                    Transformamos tu celebración en un rito de otro tiempo. Para bodas temáticas,
                    eventos culturales y fiestas donde lo ordinario no tiene cabida.
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
                  <h6 className="sm-word-wrap card-title">Espacios & Eventos Privados</h6>
                  <p className="card-paragraph">
                    Música con alma antigua para bares, restaurantes y fiestas privadas.
                    También disponibles para eventos corporativos con concepto alternativo.
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
