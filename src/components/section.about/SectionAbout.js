import React from "react"
import SkullIcon from "../../images/svg/BASILISCUS_CRANEO2.inline.svg"
import bandPhoto from "../../images/assets/basili1.jpg"
import "./section.about.css"

const tags = [
  { label: "Estilo", value: "Neo folk medieval · Folk oscuro · Música ritual" },
  { label: "Instrumentos", value: "Gaitas medievales alemanas · Davul · Surdo · Djembe" },
  { label: "Sonido", value: "Antiguo · Tribal · Ceremonial · Místico · Bailable" },
  { label: "Ideal para", value: "Festivales · Ferias medievales · Bodas · Eventos culturales · Fiestas privadas" },
]

const SectionAbout = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-inner">
        <h4 className="section-header about-title">Quiénes Somos</h4>

        <div className="about-grid">
          <div className="about-text-col">
            <div className="about-skull-deco">
              <SkullIcon className="about-skull-icon" />
            </div>
            <p className="about-bio">
              Basiliscvs es una banda de neo folk medieval que trae al presente
              el pulso salvaje de tiempos antiguos. Con gaitas medievales
              alemanas y percusiones rituales como davul, surdo y djembe, la
              banda crea un sonido oscuro, festivo y ceremonial, hecho para
              invocar danzas, procesiones, leyendas y celebraciones alrededor
              del fuego. Entre lo místico y lo primitivo, Basiliscvs transforma
              cada presentación en una experiencia inmersiva donde el pasado
              despierta con fuerza propia.
            </p>

            <div className="about-tags">
              {tags.map(tag => (
                <div key={tag.label} className="about-tag-row">
                  <span className="about-tag-label">{tag.label}</span>
                  <span className="about-tag-value">{tag.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image-col">
            <div className="about-image-frame">
              <img
                src={bandPhoto}
                alt="Basiliscvs en vivo"
                className="about-photo"
              />
              <div className="about-image-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAbout
