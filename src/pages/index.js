import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../templates/layout-wrap';
import Seo from '../components/seo';
import SocialMediaNavigation from '../components/SocialMediaNavigation';
import CurrentlyListening from '../components/CurrentlyListening';

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
          }
        }
      }
    `,
  );

  const { name, since, greetings } = pageData.site.siteMetadata;

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
            I am a 👨‍💻 Software Engineer with expertise in building and maintaining systems, APIs and
            websites with more than {currentYear - since} years of progressive experience in the
            software development industry.
          </p>

          <CurrentlyListening title="100 Ways to Create Wealth" url="https://amzn.to/3zKlRnl" />

          <SocialMediaNavigation />
        </div>
      </div>
    </Layout>
  );
}
