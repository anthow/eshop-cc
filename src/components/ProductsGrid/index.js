import React from 'react';
import Helmet from "react-helmet"
import { ProductsGridWrapper } from './styles';
import { ProductTile } from '../ProductTile';
import { withPrefix } from "gatsby"

export function ProductsGrid({ products }) {
 

  return (
    <>
    <Helmet>
    <script src={withPrefix('script.js')} type="text/javascript" />
</Helmet>
    <div className=" test-list  flex flex-col justify-start md:items-center md:flex-row md:flex-wrap">
      {products.map(product => (
        <ProductTile
          handle={product.handle}
          minPrice={product.priceRange.minVariantPrice.amount}
          description={product.description}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          key={product.shopifyId}
          title={product.title}
          
        />
      ))}
    </div>
    </>

  );
}
