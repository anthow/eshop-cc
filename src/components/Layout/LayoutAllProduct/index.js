//import { fromJSON } from 'postcss';
import React from 'react';
import { HeaderBoutique } from '../../Header/HeaderBoutique';
import { HeaderAllProduct } from '../../Header/HeaderAllProduct';
import { FooterAtelier } from '../../footer/FooterAtelier';
import "@fontsource/roboto"
import "@fontsource/dancing-script"
const LayoutAllProduct = ({ children }) => {
  return (
    <>
          <div className="site min-h-screen flex flex-col ">

      <HeaderAllProduct />
        <main className>{children}</main>
        <FooterAtelier />
        </div>
    </>
  );
};

export { LayoutAllProduct };
