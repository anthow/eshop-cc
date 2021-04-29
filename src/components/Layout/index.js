//import { fromJSON } from 'postcss';
import React from 'react';
import { Header } from '../Header';
import { Footer } from '../footer';
import { Helmet } from "react-helmet"
const Layout = ({ children }) => {
  return (
    <>
        <Helmet>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>        </Helmet>
          <div className="site min-h-screen flex flex-col ">

      <Header />
        <main className="mt-10 md:mt-0" >{children} </main>
        <Footer />
        </div>
    </>
  );
};

export { Layout };
