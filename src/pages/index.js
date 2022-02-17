import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"
import Header from "../components/header"
import SectionServices from "../components/sectionService"
import SectionContact from "../components/section.contact"
import SectionEvents from "../components/section.events"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <SectionServices />
    <SectionContact />
    {/*  <SectionEvents /> */}
  </Layout>
)

export default IndexPage
