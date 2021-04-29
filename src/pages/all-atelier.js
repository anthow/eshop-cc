import React from "react"
import {  graphql } from "gatsby"
import { LayoutAtelier } from 'components/LayoutAtelier'
import { AsideAtelier } from 'components/asideAtelier'
import { AtelierTile } from 'components/AtelierTile';


const Atelierpage = ({ data }) => (
  <LayoutAtelier>
      <section className='list-product flex flex-col md:flex-row content-center space-x-4 w-12/12'>
<AsideAtelier />

    <div className="product-list flex-grow py-10">
    <div class=" flex flex-col md:flex-row">
    {data.allShopifyProduct.edges.map(({ node }) => (
        <AtelierTile
          handle={node.handle}
          minPrice={node.priceRange.minVariantPrice.amount}
          description={node.description}
          imageFluid={node.images[0].localFile.childImageSharp.fluid}
          key={node.shopifyId}
          title={node.title}
        />
      ))}
    </div>
          </div>
    </section>
    </LayoutAtelier>
)
export default Atelierpage


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
