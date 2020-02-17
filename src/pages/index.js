import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../templates/layout-wrap"

export default () => {

  const pageData = useStaticQuery(
    graphql`
    query Index {
        site {
            siteMetadata {
                name {
                  first
                  middle
                  last
                }
                greetings
                title
                aboutMeIntro
                socialMedia {
                    name
                    url
                }
            }
        }    
    }`
  )

  return (
    <Layout>
      <section className="container">
        <div className="pure-u-1 pure-u-md-3-5">
          <div className="central-wrap">
            <p className="greeting-area">
              <span className="greeting">{pageData.site.siteMetadata.greetings[0]}</span><span className="intro">, my name is</span>
            </p>
            <h1 className="name-area">{pageData.site.siteMetadata.name[0].first} {pageData.site.siteMetadata.name[0].last}</h1>
            <p className="about-area">{pageData.site.siteMetadata.aboutMeIntro}</p>
          </div>
        </div>
        <div className="pure-u-1 pure-u-md-2-5"></div>
      </section>
    </Layout>
  )
}
