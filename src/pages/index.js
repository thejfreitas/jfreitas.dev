import React from "react"
import { graphql } from "gatsby"
import Layout from "../templates/layout-wrap"

export default ({ data }) => {
  return (
    <Layout>
      <header className="section">
        <div className="container is-widescreen">
          <h1>{data.site.siteMetadata.greeting} {data.site.siteMetadata.name}</h1>
          <p>{data.site.siteMetadata.aboutMeIntro}</p>
        </div>
      </header>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        greeting
        name
        aboutMeIntro      
      }
    }
  }
`
