import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"
import Header from "../components/header"
import SectionAbout from "../components/section.about"
import SectionMembers from "../components/section.members"
import SectionServices from "../components/sectionService"
import SectionContact from "../components/section.contact"
import SectionGallery from "../components/section.gallery"
// SectionEvents kept as reference, replaced by SectionGallery

const IndexPage = () => (
  <Layout>
    <Header />
    <SectionAbout />
    <SectionMembers />
    <SectionServices />
    <SectionGallery />
    <SectionContact />
  </Layout>
)

export const Head = () => <Seo title="Basiliscvs" />

export default IndexPage
