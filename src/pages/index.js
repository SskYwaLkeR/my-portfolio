import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/index.styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-container">
      <div className="intro">
        <div className="socials"></div>
        <h1>Hi, I'm Hrishikesh .</h1>
        <h1>Front end developer,</h1>
        <h1>CS graduate and javascript enthusiast.</h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage
