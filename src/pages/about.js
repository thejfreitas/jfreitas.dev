import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../templates/layout-wrap';

const About = () => {
  return (
    <Layout>
      <StaticImage src="../img/jfreitas-developer.jpg" className="headshot" />
    </Layout>
  );
};

export default About;
