import React from 'react';
import { graphql } from 'gatsby';
import LayoutWrap from './layout-wrap';

export default function Post({ data }) {
  const post = data.markdownRemark;
  return (
    <LayoutWrap headerText={post.frontmatter.title}>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </LayoutWrap>
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
