import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../templates/layout-wrap"
import Seo from "../components/seo"

export default function Page404() {
  const pageData = useStaticQuery(
    graphql`
      query NotFound {
        site {
          siteMetadata {
            name {
              first
              middle
              last
            }
          }
        }
      }
    `
  )

  const { first, middle, last } = pageData.site.siteMetadata.name

  return (
    <Layout>
      <Seo
        name={`${first} ${middle} ${last}`}
        title="Not found - 404"
        aboutMeIntro="This page does not exist or isn't available
        anymore."
      />
      <section className="container hero-intro">
        <div className="pure-u-1">
          <h1 className="name">Error 404</h1>

          <div className="pure-u-1 pure-u-md-2-3 hero-intro-about">
            <p>
              Page not found - This page does not exist or isn't available
              anymore.
            </p>
            <p>
              <Link to="/">Back to the homepage</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="under-the-hood-area"></section>
    </Layout>
  )
}
