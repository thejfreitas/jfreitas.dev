import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Content from '../components/Content';

export default function Layout({ children }) {
  return (
    <main className="global-wrapper">
      <Header />
      <Content>{children}</Content>
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
