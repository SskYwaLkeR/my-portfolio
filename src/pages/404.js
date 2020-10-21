import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>
      404: Not Found
      <span role="img" aria-labelledby="ghost">
        👻
      </span>
    </h1>
    <p>You just hit a page that I haven&#39;t build yet .</p>
  </Layout>
)

export default NotFoundPage
