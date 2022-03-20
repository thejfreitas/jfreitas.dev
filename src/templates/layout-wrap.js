import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import MainNavigation from '../components/MainNavigation';

export default function Layout({ children }) {
  return (
    <main className="global-wrapper">
      <Header />
      <MainNavigation />
      <Content>{children}</Content>
    </main>
  );
}
