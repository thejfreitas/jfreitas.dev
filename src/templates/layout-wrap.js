import React from 'react';
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
