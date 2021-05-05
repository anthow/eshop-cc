import React, { useState } from 'react'
import { ProductsGrid, SEO } from 'components';
import { LayoutBoutique } from 'components/LayoutBoutique'
import { Aside } from 'components/aside'
import ProductContext from 'context/ProductContext';
//import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import { Filters } from 'components/Filters';

import { Breadcrumb } from 'gatsby-plugin-breadcrumb'



export default function AllProducts({ location }) {
  const { products, collections } = React.useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const selectedCollectionIdsMap = {};
  const searchTerm = qs.s;

  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {};

      collection.products.forEach(product => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  const filterByCategory = product => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[product.shopifyId]) {
          return true;
        }
      }
      return false;
    }

    return true;
  };

  const filterBySearchTerm = product => {
    if (searchTerm) {
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    }

    return true;
  };

  const filteredProducts = products
    .filter(filterByCategory)
    .filter(filterBySearchTerm);

  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <LayoutBoutique>
      <SEO
        description="Coccinelles et compagnies"
        title="Tout les produits"
      />
      <section className='list-product mt-10 md:mt-0 flex flex-col md:flex-row content-center space-x-4 w-12/12'>
        <div className=" w-12/12 overflow-scroll h-auto ml-2 bg-white z-50 mb-2 p-1 mt-5 flex-col md:hidden space-x-0 "> 
        <button onClick={() => toggleExpansion(!isExpanded)} className=" md:hidden hover:opacity-80 italic block  p-2 text-xl  w-auto  text-center atelier rounded-full text-white ">Catégories</button>
        <div
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center pb-5 border-categorie pt-5  w-full md:w-auto ml-auto`}
          >
          <Filters className="pb-5" />
          </div>
        </div>

        <Aside />
        <div className="flex flex-col">
          <h2 className=" DancingScript">Produits</h2>
          {!!filteredProducts.length && (
            <div className="product-list flex-grow ">

              <ProductsGrid products={filteredProducts} />
            </div>
          )}
        </div>
      </section>
    </LayoutBoutique>
  );
}
