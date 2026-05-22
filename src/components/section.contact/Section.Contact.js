import React, { useState } from "react"
import "./section.contact.css"
import SkullIcon2 from "../../images/svg/BASILISCUS_CRANEO1.inline.svg"

const SectionContact = () => {
  const [status, setStatus] = useState("idle")

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      })
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact">
      <div className="section-base-container">
        <div className="separadores-vacios"></div>
        <div className="separadores-vacios"></div>
        <div className="image-background">
          <div className="mini-container">

            <div className="flexo">
              <div className="contact-card">
                <div className="content-wraper">
                  <div className="icon-wraper">
                    <div className="circle">
                      <div className="icon-container">
                        <SkullIcon2 className="skull-icon" />
                      </div>
                    </div>
                  </div>
                  <h3 className="contact-title">Para eventos y contrataciones</h3>
                  <a className="contact-link" href="mailto:basiliscvs@gmail.com" target="_blank" rel="noreferrer">
                    basiliscvs@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="content-wraper">
                  <div className="icon-wraper">
                    <div className="circle">
                      <div className="icon-container">
                        <SkullIcon2 className="skull-icon" />
                      </div>
                    </div>
                  </div>
                  <h3 className="contact-title">WhatsApp</h3>
                  <a className="contact-link" href="https://api.whatsapp.com/send?phone=525586824354" target="_blank" rel="noreferrer">
                    +52 55 8682 4354
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form
                name="contrataciones"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contrataciones" />
                <input type="hidden" name="bot-field" />

                <h3 className="form-title">Consultá disponibilidad</h3>
                <p className="form-subtitle">Contanos sobre tu evento y te respondemos a la brevedad</p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" type="text" name="nombre" placeholder="Tu nombre" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input id="email" type="email" name="email" placeholder="tu@correo.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="evento">Tipo de evento</label>
                  <select id="evento" name="evento" required>
                    <option value="">Seleccioná el tipo de evento</option>
                    <option value="Boda">Boda</option>
                    <option value="Festival">Festival / Feria medieval</option>
                    <option value="Corporativo">Evento corporativo</option>
                    <option value="Privado">Cumpleaños / Evento privado</option>
                    <option value="Teatro">Teatro / Espectáculo</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" rows="4" placeholder="Fecha aproximada, lugar, cantidad de asistentes..." required />
                </div>

                {status === "sent" && (
                  <p className="form-feedback form-feedback--ok">
                    <i className="fas fa-check-circle" /> ¡Mensaje enviado! Te contactamos pronto.
                  </p>
                )}
                {status === "error" && (
                  <p className="form-feedback form-feedback--err">
                    <i className="fas fa-times-circle" /> Algo salió mal. Escribinos directo al mail.
                  </p>
                )}

                <button type="submit" className="form-submit" disabled={status === "sent"}>
                  Enviar consulta <i className="fas fa-paper-plane" />
                </button>
              </form>
            </div>

          </div>
          <div className="contact-footer-space" />
        </div>
      </div>
    </section>
  )
}

export default SectionContact
