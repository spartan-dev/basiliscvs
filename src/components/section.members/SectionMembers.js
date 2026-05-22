import React from "react"
import EstandarteImg from "../../images/ESTANDARTE.png"
import KainImg from "../../images/KAIN.svg"
import KarameloImg from "../../images/KARAMELO.svg"
import HerrImg from "../../images/Herr_Dunkel_Pfeifer.svg"
import MisticoImg from "../../images/Mistico.svg"
import ChrisImg from "../../images/CHRISV6.png"
import "./section.members.css"

const members = [
  {
    id: "kain",
    name: "KAIN",
    image: KainImg,
    alt: "Kain",
    instruments: ["Davul", "Gaita medieval"],
    ability: "Toma 2 cervezas al mismo tiempo.",
  },
  {
    id: "karamelo",
    name: "KARAMELO",
    image: KarameloImg,
    alt: "Karamelo",
    instruments: ["Zurdo", "Davul"],
    ability: "Dany Debito move. Can play drunk as fuck.",
  },
  {
    id: "herr",
    name: "HERR DUNKEL",
    image: HerrImg,
    alt: "Herr Dunkel Pfeifer",
    instruments: ["Gaita Medieval"],
    ability:
      "Inmóvil como piedra, toca sin parar. Le apodamos la compresora humana.",
  },
  {
    id: "mistico",
    name: "MÍSTICO",
    image: MisticoImg,
    alt: "Místico",
    instruments: ["Gaita Medieval"],
    ability: "Puede cambiar entre reinos de gaitas. Altera la realidad misma.",
  },
  {
    id: "chris",
    name: "CHRIS",
    image: ChrisImg,
    alt: "Chris",
    instruments: ["Djembe", "Davul", "Derbake"],
    ability: "Lleva el fuego. Control en la sangre.",
  },
]

const SectionMembers = () => (
  <section id="members" className="members-section">
    <div className="members-inner">
      <div className="members-banner">
        <img
          src={EstandarteImg}
          alt="Estandarte Basiliscvs"
          className="members-banner__img"
        />
      </div>
      <p className="members-eyebrow">Choose your fighter</p>
      <h4 className="section-header members-title">Los Guerreros</h4>

      <div className="members-scroll">
        {members.map(member => (
          <div key={member.id} className="member-card">
            <div className="member-card__portrait">
              <img
                src={member.image}
                alt={member.alt}
                className="member-card__img"
              />
              <div className="member-card__portrait-glow" />
            </div>

            <div className="member-card__body">
              <h5 className="member-card__name">{member.name}</h5>

              <div className="card-separator" />

              <div className="member-card__stat">
                <i className="fas fa-drum member-card__icon" />
                <span>{member.instruments.join(" · ")}</span>
              </div>

              <div className="card-separator" />

              <div className="member-card__stat">
                <i className="fas fa-skull member-card__icon member-card__icon--red" />
                <span>{member.ability}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default SectionMembers
