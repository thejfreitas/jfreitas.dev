import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../templates/layout-wrap';

const About = () => {
  return (
    <Layout>
      <StaticImage src="../img/jfreitas-developer.jpg" className="headshot" />

      <p>
        I love to spend my free time learning more about new technologies in order to apply on my
        next projects as well exploring{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://jfreitas.photos">
          Canada with my camera
        </a>
      </p>
    </Layout>
  );
};

export default About;
