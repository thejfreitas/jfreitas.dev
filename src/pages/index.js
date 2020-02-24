import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../templates/layout-wrap"
import jfreitas from "../img/jfreitas-developer.jpg"

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
            }
        }    
    }`
  )

  const name = pageData.site.siteMetadata.name;

  return (
    <Layout>
      <section className="container hero-intro">
        <div className="pure-u-1 pure-u-md-2-3">
          <p className="greeting-area">
            <span className="greeting">{pageData.site.siteMetadata.greetings[0]}</span>
            <span className="intro">, my name is</span>
          </p>
          <h1 className="name">{name.first} {name.middle} {name.last}</h1>

          <div className="pure-u-1 pure-u-md-2-3">
            <p className="about-area">{pageData.site.siteMetadata.aboutMeIntro}</p>
            <p>Graduated in systems analysis, I am aficionado in helping business and individuals elevate their brands and reach the next level.</p>
            <p>I love to spend my free time learning more about new technologies in order to aplly on my next projects as well exploring <a target="_blank" rel="noopener noreferrer" href="https://jfreitas.photos">Canada with my camera</a></p>
            <p></p>
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
