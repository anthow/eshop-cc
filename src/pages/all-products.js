import React from 'react';
import {  ProductsGrid, SEO } from 'components';
import {LayoutBoutique} from 'components/LayoutBoutique'
import { Aside } from 'components/aside'
import ProductContext from 'context/ProductContext';
//import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import AsideButton from '../AsideButton';



export default function AllProducts() {
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
  return (
    <LayoutBoutique>
      <SEO
        description="Coccinelles et compagnies"
        title="Tout les produits"
      />
  <section className='list-product flex flex-col md:flex-row content-center space-x-4 w-12/12'>

<Aside />

        {!!filteredProducts.length && (
  <div className="product-list flex-grow py-10">
  <ProductsGrid products={filteredProducts} />
          </div>
        )}
      </section>
    </LayoutBoutique>
  );
}
