import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"
import Header from "../components/header"
import SectionServices from "../components/sectionService"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <SectionServices />
  </Layout>
)

export default IndexPage
