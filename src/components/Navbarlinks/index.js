// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  transition: all 200ms ease-in;
  z-index: 999;
  color:white;
  
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    z-index: 6;
    color:#4A0D17;
    font-family: 'Dancing Script' !important;

  }
`
const NavbarLinks = () => {
  return (
    <div className="text-base font-regular mt-3 mb-3 md:m-0">
    <NavItem  to="/produits"
                partiallyActive
                activeClassName="font-bold underline "
                className=" hover:opacity-80 block  mb-6 md:mb-0  md:p-1 md:px-4 md:inline-block">
                  Boutique</NavItem>
      <NavItem  to="/ateliers"
                partiallyActive
                activeClassName="font-bold underline "
                className=" hover:opacity-80 block  mb-6 md:mb-0  md:p-1 md:px-4 md:inline-block">
                  Ateliers</NavItem>
      <NavItem  to="/contact"
                partiallyActive
                activeClassName="font-bold underline "
                className=" hover:opacity-80 block  mb-6 md:mb-0  md:p-1 md:px-4 md:inline-block">
                  Contact</NavItem>
      <NavItem  to="/all-products"
                partiallyActive
                activeClassName="font-bold underline "
                className=" hover:opacity-80 block  mb-5 md:mb-0  md:p-1 md:px-4 md:inline-block">
                  Blog</NavItem>
    </div>
  )
}

export default NavbarLinks