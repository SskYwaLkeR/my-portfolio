import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Company from "../components/Company-template/Company.js"
import { we18Data } from "../company.data.js"

const SecondPage = () => (
  <Layout>
    <SEO title="We18.in" />

    <Company {...we18Data} />
  </Layout>
)

export default SecondPage
