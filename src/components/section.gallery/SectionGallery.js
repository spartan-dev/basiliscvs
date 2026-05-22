import React, { useState, useEffect, useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./section.gallery.css"

const SectionGallery = () => {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  const data = useStaticQuery(graphql`
    query GalleryImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "assets" }
          extension: { regex: "/(jpg|jpeg|png|webp)/" }
        }
        sort: { name: ASC }
      ) {
        nodes {
          id
          name
          thumb: childImageSharp {
            gatsbyImageData(width: 600, quality: 82, placeholder: BLURRED)
          }
          full: childImageSharp {
            gatsbyImageData(quality: 90, placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes

  const openLightbox = useCallback((index) => {
    setLightbox({ open: true, index })
    document.body.style.overflow = "hidden"
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox({ open: false, index: 0 })
    document.body.style.overflow = ""
  }, [])

  const prev = useCallback(() => {
    setLightbox(lb => ({
      ...lb,
      index: (lb.index - 1 + images.length) % images.length,
    }))
  }, [images.length])

  const next = useCallback(() => {
    setLightbox(lb => ({
      ...lb,
      index: (lb.index + 1) % images.length,
    }))
  }, [images.length])

  useEffect(() => {
    if (!lightbox.open) return
    const handler = e => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightbox.open, prev, next, closeLightbox])

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-inner">
        <h4 className="section-header gallery-title">Memento Mori</h4>
        <p className="gallery-subtitle">El pasado que nos define</p>

        {/* Desktop: masonry grid */}
        <div className="gallery-masonry">
          {images.map((img, i) => (
            <button
              key={img.id}
              className="masonry-item"
              onClick={() => openLightbox(i)}
              aria-label={`Ver foto ${img.name}`}
            >
              <GatsbyImage
                image={getImage(img.thumb)}
                alt={img.name}
                className="masonry-img"
              />
              <div className="masonry-hover" />
            </button>
          ))}
        </div>

        {/* Mobile: horizontal carousel */}
        <div className="gallery-carousel">
          {images.map((img, i) => (
            <button
              key={img.id}
              className="carousel-slide"
              onClick={() => openLightbox(i)}
              aria-label={`Ver foto ${img.name}`}
            >
              <GatsbyImage
                image={getImage(img.thumb)}
                alt={img.name}
                className="carousel-img"
              />
            </button>
          ))}
        </div>

        <div className="gallery-social-cta">
          <p>Seguinos para más momentos</p>
          <div className="gallery-cta-links">
            <a
              href="https://www.instagram.com/basiliscvs/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              <i className="fab fa-instagram" /> Instagram
            </a>
            <a
              href="https://www.tiktok.com/@basiliscvs"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              <i className="fab fa-tiktok" /> TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            <i className="fas fa-times" />
          </button>

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Anterior"
          >
            <i className="fas fa-chevron-left" />
          </button>

          <div
            className="lightbox-content"
            onClick={e => e.stopPropagation()}
          >
            <GatsbyImage
              image={getImage(images[lightbox.index].full)}
              alt={images[lightbox.index].name}
              className="lightbox-img"
              objectFit="contain"
            />
            <p className="lightbox-counter">
              {lightbox.index + 1} / {images.length}
            </p>
          </div>

          <button
            className="lightbox-arrow lightbox-next"
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Siguiente"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      )}
    </section>
  )
}

export default SectionGallery
