import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SkullIcon from "../../images/svg/BASILISCUS_CRANEO2.inline.svg"
import "./navbar.css"

const NAV_LINKS = [
  { label: "Nosotros", id: "about" },
  { label: "Fangs", id: "members" },
  { label: "Servicios", id: "services" },
  { label: "Galería", id: "gallery" },
  { label: "Contacto", id: "contact" },
]

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/basiliscusrex", icon: "fab fa-facebook", label: "Facebook" },
  { href: "https://www.instagram.com/basiliscvs", icon: "fab fa-instagram", label: "Instagram" },
  { href: "https://www.tiktok.com/@basiliscvs", icon: "fab fa-tiktok", label: "TikTok" },
  { href: "https://api.whatsapp.com/send?phone=525586824354", icon: "fab fa-whatsapp", label: "WhatsApp" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const toggleMenu = () => setMenuOpen(o => !o)
  const closeMenu = () => setMenuOpen(false)

  const scrollTo = (e, id) => {
    e.preventDefault()
    closeMenu()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav className={`navbar ${scrolled || menuOpen ? "navbar--solid" : ""}`}>
        <div className="navbar-container">

          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <StaticImage
              src="../../images/BASILISCUS_LOGO_TRANSPARENTE.png"
              alt="Basiliscvs"
              placeholder="none"
              layout="fixed"
              width={160}
              height={62}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="nav-desktop">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="nav-link" onClick={e => scrollTo(e, link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-divider" />
            {SOCIAL_LINKS.map(s => (
              <li key={s.label}>
                <a href={s.href} className="nav-link nav-social" target="_blank" rel="noreferrer" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <i className="fas fa-times menu-toggle__close" />
              : <SkullIcon className="menu-toggle__skull" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-overlay ${menuOpen ? "mobile-overlay--open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="mobile-nav">
          <ul className="mobile-nav__links">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="mobile-nav__link"
                  onClick={e => scrollTo(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="mobile-nav__social">
            {SOCIAL_LINKS.map(s => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="mobile-nav__social-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  onClick={closeMenu}
                >
                  <i className={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
