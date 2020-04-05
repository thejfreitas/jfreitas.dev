import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../templates/layout-wrap"
import jfreitas from "../img/jfreitas-developer.jpg"
import SEO from "../components/seo"

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
            aboutMeIntro
            title
          }
        }
      }
    `
  )

  const name = pageData.site.siteMetadata.name

  return (
    <Layout>
      <SEO
        name={`${name.first} ${name.middle} ${name.last}`}
        title={pageData.site.siteMetadata.title}
        aboutMeIntro={pageData.site.siteMetadata.aboutMeIntro}
      />
      <section className="container hero-intro">
        <div className="pure-u-1 pure-u-md-2-3">
          <p className="greeting-area">
            <span className="greeting">
              {pageData.site.siteMetadata.greetings[0]}
            </span>
            <span className="intro">, my name is</span>
          </p>
          <h1 className="name">
            {name.first} {name.middle} {name.last}
          </h1>

          <div className="pure-u-1 pure-u-md-2-3 hero-intro-about">
            <p>
              I am a Full Stack Web Developer with expertise in build and
              maintaining systems, APIs and websites. More than 6 years of
              progressive experience in the software development industry I am
              passionate in helping companies and individuals elevate their
              brands and reach the next level in their business.
            </p>

            <p>
              I love to spend my free time learning more about new technologies
              in order to apply on my next projects as well exploring{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jfreitas.photos"
              >
                Canada with my camera
              </a>
            </p>
          </div>
        </div>

        <div className="pure-u-1 pure-u-md-1-3">
          <figure>
            <img className="headshot" src={jfreitas} alt={name.last} />
          </figure>
        </div>
      </section>

      <section className="unde-the-hood-area"></section>
    </Layout>
  )
}
