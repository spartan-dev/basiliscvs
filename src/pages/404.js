import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import SkullIcon from "../images/svg/BASILISCUS_CRANEO1.inline.svg"
import "../styles/404.css"

const NotFoundPage = () => (
  <div className="page-404">
    <div className="page-404__skull">
      <SkullIcon />
    </div>
    <p className="page-404__code">404</p>
    <h1 className="page-404__title">Esta página cayó en batalla</h1>
    <p className="page-404__sub">El sendero que buscas se ha perdido en la oscuridad del medioevo.</p>
    <Link to="/" className="page-404__btn">
      <i className="fas fa-home" /> Volver al inicio
    </Link>
  </div>
)

export const Head = () => <Seo title="404 — Página no encontrada" />

export default NotFoundPage
