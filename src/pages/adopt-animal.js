import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { AdoptPet } from "../project.data.js"
import ProjectTemplate from "../components/Project-template/Project.template.js"

const AdoptAnimalPage = () => (
  <Layout>
    <SEO title="Adopt Animals" />

    <ProjectTemplate {...AdoptPet} />
  </Layout>
)

export default AdoptAnimalPage
