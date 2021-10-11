import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  return (
    <section className="container hero-intro">
      <StaticImage src="../img/jfreitas-developer.jpg" className="headshot" />
    </section>
  );
};

export default About;
