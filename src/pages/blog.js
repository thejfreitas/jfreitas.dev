import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../templates/layout-wrap';

const Blog = ({ data }) => {
  console.log(data);

  return <Layout>Blog</Layout>;
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`;

export default Blog;
