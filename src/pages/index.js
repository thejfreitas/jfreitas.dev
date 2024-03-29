import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../templates/layout-wrap';
import Seo from '../components/seo';
import SocialMediaNavigation from '../components/SocialMediaNavigation';

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

  const { name, greetings, title, aboutMeIntro } = pageData.site.siteMetadata;

  const [currentGreetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const maxIndex = greetings.length - 1;

    const interval = setInterval(() => {
      setGreetingIndex(currentGreetingIndex < maxIndex ? currentGreetingIndex + 1 : 0);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentGreetingIndex, greetings.length]);

  return (
    <Layout>
      <Seo name={`${name.first} ${name.last}`} title={title} aboutMeIntro={aboutMeIntro} />

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
            websites.
          </p>
          <SocialMediaNavigation />
        </div>
      </div>
    </Layout>
  );
}
