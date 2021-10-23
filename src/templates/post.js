import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

export default function Post({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout headerText={post.frontmatter.title}>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
