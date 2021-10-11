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
              icoClass
            }
            navigation {
              label
              path
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
            const { label, path } = item;

            return (
              <li key={index}>
                <a href={path} aria-label={label}>
                  <span>{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav>
        <ul>
          {socialMedia.map((item, index) => {
            const { name, icoClass, url } = item;

            return (
              <li key={index}>
                <a
                  href={url}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${icoClass} ico`}
                >
                  <span>{name}</span>
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
