import React from 'react';
import ProductContext from 'context/ProductContext';
import { CategoryFilterItem } from './CategoryFilterItem';
import { FiltersWrapper } from './styles';

export function Filters() {
  const { collections } = React.useContext(ProductContext);

  return (
    <FiltersWrapper>
      <div className=' title-categorie font-bold text-center mb-6'>types de produits</div>
      {collections.map(collection => (
        <CategoryFilterItem 
          title={collection.title}
          key={collection.shopifyId}
          id={collection.shopifyId}
          className=' title-categorie font-bold text-center mb-6'></CategoryFilterItem>
    
      ))}

    </FiltersWrapper>
    
  );
}
