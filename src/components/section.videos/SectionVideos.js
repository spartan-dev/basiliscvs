import React, { useState } from "react"
import "./section.videos.css"

const youtubeVideos = [
  { id: "PPdXAeWR2ts", title: "Basiliscvs en vivo" },
  { id: "-z9Dkyd-vCY", title: "Basiliscvs — presentación" },
]

const tiktokVideos = [
  { id: "7444327457303399736" },
  { id: "7437607348346096951" },
]

const LiteYoutube = ({ id, title }) => {
  const [active, setActive] = useState(false)

  return (
    <div
      className={`lite-yt ${active ? "lite-yt--active" : ""}`}
      onClick={() => setActive(true)}
    >
      {active ? (
        <iframe
          className="lite-yt__iframe"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
            className="lite-yt__thumb"
            loading="lazy"
          />
          <div className="lite-yt__overlay" />
          <button className="lite-yt__play" aria-label="Reproducir video">
            <i className="fab fa-youtube lite-yt__play-icon" />
          </button>
        </>
      )}
    </div>
  )
}

const TikTokEmbed = ({ id }) => {
  const [active, setActive] = useState(false)

  return (
    <div className="tiktok-wrap">
      {active ? (
        <iframe
          className="tiktok-iframe"
          src={`https://www.tiktok.com/embed/v2/${id}`}
          title={`TikTok ${id}`}
          allow="encrypted-media"
          allowFullScreen
        />
      ) : (
        <button
          className="tiktok-placeholder"
          onClick={() => setActive(true)}
          aria-label="Cargar video de TikTok"
        >
          <i className="fab fa-tiktok tiktok-placeholder__icon" />
          <span className="tiktok-placeholder__label">Ver clip</span>
          <span className="tiktok-placeholder__sub">@basiliscvs</span>
        </button>
      )}
    </div>
  )
}

const SectionVideos = () => (
  <section id="videos" className="videos-section">
    <div className="videos-inner">
      <h2 className="section-header videos-title">En Vivo</h2>
      <p className="videos-subtitle">El ritual no se describe. Se presencia.</p>

      <div className="videos-grid">
        <div className="videos-row videos-row--yt">
          {youtubeVideos.map(v => (
            <LiteYoutube key={v.id} id={v.id} title={v.title} />
          ))}
        </div>

        <div className="videos-row videos-row--tt">
          {tiktokVideos.map(v => (
            <TikTokEmbed key={v.id} id={v.id} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default SectionVideos
