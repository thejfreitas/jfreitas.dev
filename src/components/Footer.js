import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const siteDataQuery = useStaticQuery(
    graphql`
      query FooterData {
        site {
          siteMetadata {
            siteAddress
            repository
          }
        }
      }
    `,
  );

  const { siteAddress, repository } = siteDataQuery.site.siteMetadata;

  return (
    <footer className="container">
      <div>
        <p>
          {siteAddress} {currentYear} &bull; Handcrafted by me
        </p>
      </div>
      <div>
        <p>
          <a href={repository} target="_blank" rel="noopener noreferrer">
            How I built this website
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
