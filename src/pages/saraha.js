import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Saraha } from "../project.data.js"
import ProjectTemplate from "../components/Project-template/Project.template.js"

const SecondPage = () => (
  <Layout>
    <SEO title="Saraha" />

    <ProjectTemplate {...Saraha} />
  </Layout>
)

export default SecondPage
