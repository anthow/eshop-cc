import React from 'react';
import {  ProductsGrid, SEO } from 'components';
import {LayoutBoutique} from 'components/Layout/LayoutBoutique'
import {LayoutAllProduct} from 'components/Layout/LayoutAllProduct'
import { Aside } from 'components/aside'
import ProductContext from 'context/ProductContext';
//import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';



export default function Laine() {
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

<div className="head w-10/12   m-auto py-10 md:max-w-screen-lg">
          <img className="m-auto block  mb-10" alt="Coccinelles et compagnies" src="laine.svg"/>
          <h2 className=" italic text-4xl text-center mb-5">La laine des coccinelles</h2>
          <p className=" m-auto text-center mb-5">
            Aenean maximus lorem vitae auctor ullamcorper. Aliquam cursus
            fermentum rhoncus. Aenean interdum n risus a iaculis. In placerat
            dolor purus, nec suscipit est iaculis at. Pellentesque nec nisl
            risus. Nullam quis felis vel urna viverra mollis ac nec felis. In
            scelerisque ante non vehicula auctor.
            Aenean maximus lorem vitae auctor ullamcorper. Aliquam cursus
            fermentum rhoncus. Aenean interdum n risus a iaculis. In placerat
            dolor purus, nec suscipit est iaculis at. Pellentesque nec nisl
            risus. Nullam quis felis vel urna viverra mollis ac nec felis. In
            scelerisque ante non vehicula auctor.
          </p>
        {!!filteredProducts.length && (
  <div className="product-list flex-grow py-10">

  <ProductsGrid products={filteredProducts} />
          </div>
        )}
                </div>

      </section>
    </LayoutBoutique>
  );
}
