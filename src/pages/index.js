import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="hero"></section>
    {/*   <StaticImage
      src="../images/BASILISCUS_COMPLETO_BLANCO.png"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      className="hero"
    /> */}
  </Layout>
)

export default IndexPage
