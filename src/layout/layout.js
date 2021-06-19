import React from 'react';
import Head from 'next/head';
import reset from '../styles/reset';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Layout = ({ children }) => {
  return (
    <div className="root">
    <Head>
      <title>AKQA</title>
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="icon" type="image/png" href="/favicon/favicon.ico" />
      <meta name="description" content="AKQA description" key="description" />
    </Head>
    <Header />
    <div className="container">
      {children}
    </div>
    <Footer />
    <style jsx global>
      {reset}
    </style>
    </div>
  )
}

export default Layout;
