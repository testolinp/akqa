import React from 'react';
import Head from 'next/head';
import reset from '../styles/reset';
import fonts from '../styles/fonts';
import variables from '../styles/variables';
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
    <div className="container">
      <Header />
      <div className="wrapper">
        {children}
      </div>
    </div>
    <Footer />
    <style jsx>
      {`
        .root {
          background: var(--color-white);
          background: linear-gradient(180deg, var(--color-white) 0%, var(--color-grey-01) 100%);
          font-family: var(--main-font);
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 auto;
          max-width: 500px;
          min-height: calc(100vh - 41px);
          padding-bottom: 120px;
        }

        .wrapper {
          padding-top: 70px;
        }
      `}
    </style>
    <style jsx global>
      {reset}
    </style>
    <style jsx global>
      {fonts}
    </style>
    <style jsx global>
      {variables}
    </style>
    </div>
  )
}

export default Layout;
