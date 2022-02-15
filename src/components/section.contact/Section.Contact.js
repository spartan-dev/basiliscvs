import React from "react"
import "./section.contact.css"
import SkullIcon2 from "../../images/svg/BASILISCUS_CRANEO1.inline.svg"
const SectionContact = () => {
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
                        <SkullIcon2 className="skull-icon " />
                      </div>
                    </div>
                  </div>
                  <h5 className="contact-title">
                    Para eventos y contrataciones
                  </h5>
                  <a
                    className="contact-link"
                    href="mailto:basilisvs@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    basilisvs@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <div className="content-wraper">
                  <div className="icon-wraper">
                    <div className="circle">
                      <div className="icon-container">
                        <SkullIcon2 className="skull-icon " />
                      </div>
                    </div>
                  </div>
                  <h5 className="contact-title">whats app us</h5>
                  <a
                    className="contact-link"
                    href="https://api.whatsapp.com/send?phone=525586824354"
                    target="_blank"
                    rel="noreferrer"
                  >
                    5586824354
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContact
