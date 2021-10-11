import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import MainNavigation from '../components/MainNavigation';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MainNavigation />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
