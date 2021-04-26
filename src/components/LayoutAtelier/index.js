//import { fromJSON } from 'postcss';
import React from 'react';
import { HeaderAtelier } from '../HeaderAtelier'
import { FooterAtelier } from '../footer/FooterAtelier';
import "@fontsource/roboto"
import "@fontsource/dancing-script"
const LayoutAtelier = ({ children }) => {
  return (
    <>
          <div className="site min-h-screen flex flex-col ">

      <HeaderAtelier/>
        <main className="mt-10 md:mt-0" >{children} </main>
        <FooterAtelier />
        </div>
    </>
  );
};

export { LayoutAtelier };
