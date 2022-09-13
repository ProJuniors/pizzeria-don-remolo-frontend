import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Layout({ children }) {
  return (
    <div className="Layout max-w-1440 m-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
