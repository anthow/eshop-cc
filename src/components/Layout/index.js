import { fromJSON } from 'postcss';
import React from 'react';
import { Header } from '../Header';
import { Footer } from '../footer';
import "@fontsource/roboto"
import "@fontsource/dancing-script"
const Layout = ({ children }) => {
  return (
    <>
          <div className="site min-h-screen flex flex-col ">

      <Header />
        <main>{children}</main>
        <Footer />
        </div>
    </>
  );
};

export { Layout };
