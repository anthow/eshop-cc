import React from 'react';
import { ProductsGridWrapper } from './styles';
import { ProductTile } from '../ProductTile';

export function ProductsGrid({ products }) {
  return (
    <div className=" flex flex-col md:content-evenly md:flex-row">
      {products.map(product => (
        <ProductTile
        className="mr-10"
          handle={product.handle}
          minPrice={product.priceRange.minVariantPrice.amount}
          description={product.description}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          key={product.shopifyId}
          title={product.title}
          
        />
      ))}
    </div>
  );
}
