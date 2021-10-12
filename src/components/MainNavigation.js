import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const MainNavigation = () => {
  const headerData = useStaticQuery(
    graphql`
      query MainHeader {
        site {
          siteMetadata {
            socialMedia {
              name
              url
              icon
            }
            navigation {
              label
              path
              icon
            }
          }
        }
      }
    `,
  );

  const { socialMedia, navigation } = headerData.site.siteMetadata;

  return (
    <aside className="nav-sidebar">
      <nav>
        <ul>
          {navigation.map((item, index) => {
            const { label, path, icon } = item;

            return (
              <li key={index}>
                <a href={path} aria-label={label}>
                  <img src={`${icon}.svg`} alt={label} />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
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
    </aside>
  );
};

export default MainNavigation;
