import React from 'react';
import { ProductContextProvider } from './src/context/ProductContext';
import { CartContextProvider } from './src/context/CartContext';
//import { GlobalStyle } from './src/components/globalStyles';
//import { GlobalStyle } from './src/components/styles/global.css';
import './src/styles/global.css';
import './src/styles/custom.css';
export const wrapRootElement = ({ element }) => (
  <ProductContextProvider>
    <CartContextProvider>{element}</CartContextProvider>
  </ProductContextProvider>
);

export const wrapPageElement = ({ element }) => (
  <>
    {element}
  </>
);
const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js")
    addScript("//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js")
  }
}
