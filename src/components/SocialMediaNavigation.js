import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const SocialMediaNavigation = () => {
  const socialMediaData = useStaticQuery(
    graphql`
      query SocialMediaNavigationData {
        site {
          siteMetadata {
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

  const { socialMedia } = socialMediaData.site.siteMetadata;

  return (
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
  );
};

export default SocialMediaNavigation;
