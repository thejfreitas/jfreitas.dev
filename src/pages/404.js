import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../templates/layout-wrap';
import Seo from '../components/seo';

export default function Page404() {
  const pageData = useStaticQuery(
    graphql`
      query NotFound {
        site {
          siteMetadata {
            name {
              first
              last
            }
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
        title="Not found - 404"
        aboutMeIntro="This page does not exist or isn't available
        anymore."
      />
      <section className="main-page">
        <div>
          <h1>Error 404</h1>

          <p>Page not found - This page does not exist or isn't available anymore.</p>
          <p>
            <Link to="/">Back to the homepage</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
