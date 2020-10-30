import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectTemplate from "../components/Project-template/Project.template.js"
import { Ecomm } from "../project.data.js"

const EcommPage = () => (
  <Layout>
    <SEO title="E-comm" />

    <ProjectTemplate {...Ecomm} />
  </Layout>
)

export default EcommPage
