import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ogImage from "../images/assets/JARDINES5.jpg"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata?.siteUrl
  const ogImageUrl = `${siteUrl}${ogImage}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Basiliscvs",
    description: metaDescription,
    url: siteUrl,
    genre: ["Medieval Folk", "Neo Folk", "World Music"],
    foundingLocation: {
      "@type": "Place",
      name: "Ciudad de México, México",
    },
    sameAs: [
      "https://www.facebook.com/share/1Hni7nd9nz/",
      "https://www.instagram.com/basiliscvs",
      "https://www.tiktok.com/@basiliscvs",
      "https://www.youtube.com/@basiliscvs",
    ],
  }

  return (
    <>
      <html lang="es" />
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Basiliscvs" />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="800" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ""} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway&family=Staatliches&family=PT+Sans:wght@700&display=swap" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/8b2ab9f0eb.js" crossOrigin="anonymous" />
      {children}
    </>
  )
}

export default Seo
