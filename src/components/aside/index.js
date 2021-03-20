import React from 'react';
import { Filters,  } from '../Filters';
import { Search } from '../Search'
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import ProductContext from '../../context/ProductContext';

export function Aside(){

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


    return( 
        <aside className='list-product flex p-2 text-center align-middle md:flex-col content-center space-x-4 px-8  border-r-0 md:border-r-2 '>
Bonjour
<Search />
{!!searchTerm && !!filteredProducts.length && (
        <h3>
          Recherche pour: <strong>'{searchTerm}'</strong>
        </h3>
      )}
      {!!filteredProducts.length && <p>{filteredProducts.length} ShopifyProductFields</p>}
        <Filters />
        {!filteredProducts.length && (
          <div>
            <h3>
              <span>Aucun article trouvé</span>
              &nbsp;
              <strong>'{searchTerm}'</strong>
            </h3>
           
          </div>
        )}
</aside>
    );
}

/*

/{!!searchTerm && !!filteredProducts.length && (
        <h3>
          Search term: <strong>'{searchTerm}'</strong>
        </h3>
      )}
      {!!filteredProducts.length && <h4>{filteredProducts.length} products</h4>}
<Filters />

*/