import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProfileCard from "../components/profile-card"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileCard
      image="ALo som teste"
      name=" José Eduardo"
      description=" Remember to query from metadata"
    />
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
