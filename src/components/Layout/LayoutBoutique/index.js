import { fromJSON } from 'postcss';
import React from 'react';
import { HeaderBoutique } from '../../Header/HeaderBoutique';
import { FooterBoutique } from '../../footer/footerBoutique';
import "@fontsource/roboto"
import "@fontsource/dancing-script"
const LayoutBoutique = ({ children }) => {
  return (
    <>
          <div className="site min-h-screen flex flex-col ">

      <HeaderBoutique />
        <main className>{children}</main>
        <FooterBoutique />
        </div>
    </>
  );
};

export { LayoutBoutique };
