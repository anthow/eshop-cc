import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  fragment ProductTileFields on ShopifyProduct {
    handle
    priceRange {
      minVariantPrice {
        amount
      }
    }
  }
  {
     allShopifyProduct {
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


    allShopifyCollection(sort: { fields: title, order: ASC }) {
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
`;

const defaultState = {
  products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allShopifyCollection, allShopifyProduct } = useStaticQuery(query);

  return (
    <ProductContext.Provider
      value={{
        products: allShopifyProduct.edges.map(({ node }) => node) || [],
        collections: allShopifyCollection.edges.map(({ node }) => node) || [],
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
