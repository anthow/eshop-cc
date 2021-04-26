import React from 'react';
import ProductContext from 'context/ProductContext';
import { CategoryFilterItem } from './CategoryFilterItem';
import { FiltersWrapper } from './styles';




export function Filters(data) {
  const { collections } = React.useContext(ProductContext);

  return (
    <FiltersWrapper>
      <div className=' title-categorie font-bold text-center mb-6'>types de formations</div>
      {data.collections.map(collection => (
        <CategoryFilterItem
          title={data.collection.title}
          key={data.collection.shopifyId}
          id={data.collection.shopifyId}
        />
      ))}
    </FiltersWrapper>
  );
}
