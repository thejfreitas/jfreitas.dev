import React from 'react';
import Footer from '../components/Footer';

const Content = ({ children }) => {
  return (
    <section className="content-wrapper">
      <article className="container">{children}</article>
      <Footer />
    </section>
  );
};

export default Content;
