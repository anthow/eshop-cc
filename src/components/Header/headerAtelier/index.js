import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Cart } from '../../Cart';
import { Link } from 'gatsby'

export function HeaderAtelier({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <header className=" headeratelier text-white">
      <Helmet>
        <title> Coccinelles et compagnies</title>
      </Helmet>
      <nav >
        <div className="flex flex-wrap container justify-between mx-auto p-2">
          <Link to="/" className="flex items-center no-underline">
            <span className=" DancingScript italic ml-2 font-bold">
            Coccinelles et compagnies
            </span>
          </Link>
          <button
            className="block md:hidden border border-white flex items-center px-3 py-2"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect fill="none" height="22" width="22" y="-1" x="-1"/>
              </g>
              <g>
                <title>Menu</title>
                <line y2="4.5" x2="18.7426" y1="4.5" x1="1.54282" strokeWidth="3.5" stroke="grey" fill="none"/>
                <line y2="10" x2="18.7426" y1="10" x1="1.54282" strokeWidth="3.5" stroke="grey" fill="none"/>
                <line y2="17.5" x2="18.7426" y1="17.5" x1="1.54282" strokeWidth="3.5" stroke="grey" fill="none"/>
              </g>
            </svg>
          </button>
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto ml-auto`}
          >
            <div className="text-sm font-regular mt-3 md:m-0">
             
              <Link
                to="/all-products"
                partiallyActive
                activeClassName="text-green-800 font-bold "
                className="block p-1 md:px-4 md:inline-block"
              >
                boutique  
              </Link>

              <Link
                to="/all-atelier"
                partiallyActive
                activeClassName="text-green-800 font-bold "
                className="block p-1 md:px-4 md:inline-block"
              >
                atelier
              </Link>
              <Link
                to="/laine"
                partiallyActive
                activeClassName="text-green-800 font-bold "
                className="block p-1 md:px-4 md:inline-block"
              >
                   La laine des coccinelles
              </Link>
              <Link
                to="/contact"
                partiallyActive
                activeClassName="text-green-800 font-bold "
                className="block p-1 md:px-4 md:inline-block"
              >
                contact
              </Link>
              <Link
                to="/blog"
                partiallyActive
                activeClassName="text-green-800 font-bold "
                className="block p-1 md:px-4 md:inline-block"
              >
                blog
              </Link>
              </div>
              <div>

      <Cart />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
