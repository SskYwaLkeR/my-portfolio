import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Company from "../components//Company-template/Company.js"
import { tuutr } from "../company.data.js"

const SecondPage = () => (
  <Layout>
    <SEO title="Tuutr" />

    <Company {...tuutr} />
  </Layout>
)

export default SecondPage
