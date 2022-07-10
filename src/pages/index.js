import React, { useEffect, useState } from 'react';
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
            since
            socialMedia {
              name
              url
              icon
            }
          }
        }
      }
    `,
  );

  const { name, since, socialMedia, greetings } = pageData.site.siteMetadata;

  const [currentGreetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const maxIndex = greetings.length - 1;

    const interval = setInterval(() => {
      setGreetingIndex(currentGreetingIndex < maxIndex ? currentGreetingIndex + 1 : 0);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentGreetingIndex, greetings.length]);

  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <Seo
        name={`${name.first} ${name.last}`}
        title={pageData.site.siteMetadata.title}
        aboutMeIntro={pageData.site.siteMetadata.aboutMeIntro}
      />

      <div className="main-page">
        <div>
          <p className="greetings">
            <span className="emoji">👋</span>
            <span className="greeting" data-greeting={greetings[currentGreetingIndex]}></span>
            <span className="intro">my name is</span>
          </p>
          <h1>
            {name.first} {name.last}
          </h1>
          <p>
            I am a Software Engineer with expertise in build and maintaining systems, APIs and
            websites with more than {currentYear - since} years of progressive experience in the
            software development industry.
          </p>

          <nav>
            <ul>
              {socialMedia.map((item, index) => {
                const { name, icon, url } = item;

                return (
                  <li key={index}>
                    <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                      <img src={`${icon}.svg`} alt={name} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  );
}
