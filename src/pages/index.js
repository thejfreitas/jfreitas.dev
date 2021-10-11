import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../templates/layout-wrap';
import Seo from '../components/seo';

export default function Index() {
  const pageData = useStaticQuery(
    graphql`
      query Index {
        site {
          siteMetadata {
            name {
              first
              last
            }
            greetings
            aboutMeIntro
            title
          }
        }
      }
    `,
  );

  const { first, last } = pageData.site.siteMetadata.name;

  return (
    <Layout>
      <Seo
        name={`${first} ${last}`}
        title={pageData.site.siteMetadata.title}
        aboutMeIntro={pageData.site.siteMetadata.aboutMeIntro}
      />

      <p>
        <span className="greeting">{pageData.site.siteMetadata.greetings[0]}</span>
        <span className="intro">, my name is</span>
      </p>
      <h1>
        {first} {last}
      </h1>

      <div>
        <p>
          I am a Full Stack Web Developer with expertise in build and maintaining systems, APIs and
          websites. More than 6 years of progressive experience in the software development industry
          I am passionate in helping companies and individuals elevate their brands and reach the
          next level in their business.
        </p>
      </div>
    </Layout>
  );
}
