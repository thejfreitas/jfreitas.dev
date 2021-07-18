import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../templates/layout-wrap"
import Seo from "../components/seo"


export default function Index() {
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

  const { first, middle, last } = pageData.site.siteMetadata.name

  return (
    <Layout>
      <Seo
        name={`${first} ${middle} ${last}`}
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
            {first} {middle} {last}
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
          <StaticImage src="../img/jfreitas-developer.jpg" className="headshot" alt={last} />
        </div>
      </section>

      <section className="under-the-hood-area"></section>
    </Layout>
  )
}
