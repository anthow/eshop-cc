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
export const query = graphql`
fragment ProductTileFields on ShopifyProduct {
  handle
  priceRange {
    minVariantPrice {
      amount
    }
  }
}
{
  allShopifyProduct(filter: {productType: {eq: "Atelier"}    }) {
    edges {
    node {
      images {
        localFile {
          childImageSharp {
            fluid {
              base64
              src
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
              sizes
              originalImg
              originalName
              presentationHeight
              presentationWidth
            }
          }
        }
      }
      availableForSale
      createdAt
      description
      descriptionHtml
      handle
      id
      vendor
      title
      tags
      shopifyId
      publishedAt
      productType
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          currencyCode
          amount
        }
      }
      variants {
        availableForSale
        weightUnit
        weight
        title
        sku
        shopifyId
        requiresShipping
        priceNumber
        price
        id
      }
    }
  }
}


allShopifyCollection(
  sort: {fields: title, order: ASC}
  filter: {products: {elemMatch: {productType: {glob: "Atelier"}}}}
) {
  edges {
    node {
      products {
        ...ShopifyProductFields
        ...ProductTileFields
      }
      title
      description
      shopifyId
    }
  }
}
}
`