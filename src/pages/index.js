import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/index.styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-container">Hello</div>
  </Layout>
)

export default IndexPage
