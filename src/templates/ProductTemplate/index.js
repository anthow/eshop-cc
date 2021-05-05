import React from 'react';
import { graphql } from 'gatsby';
import { LayoutBoutique } from 'components/LayoutBoutique'
import {

  ImageGallery,
  ProductQuantityAdder,
  SEO,
} from 'components';
import { Price } from './styles';
import CartContext from 'context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;

export default function ProductTemplate(props, location) {
  const { getProductById } = React.useContext(CartContext);
  const [product, setProduct] = React.useState(null);
  const [selectedVariant, setSelectedVariant] = React.useState(null);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;

  React.useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      setProduct(result);
      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
  }, [
    getProductById,
    setProduct,
    props.data.shopifyProduct.shopifyId,
    variantId,
  ]);

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(v => v.id === e.target.value);
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
  };

  return (
    <LayoutBoutique>
      <SEO
        description={props.data.shopifyProduct.description}
        title={props.data.shopifyProduct.title}
      />
      <div className="flex mt-20 flex-col  md:flex-row content-between m-auto w-8/12 md:mt-10" >
        <button className=" md:hidden mb-3  hover:opacity-80 border-2 text-l p-1 rounded-full " onClick={() => navigate(-1)}>Revenir aux produits</button>

        <div className=" w-10/12 m-auto md:m-0 md:w-1/3">
          <ImageGallery className="flex-grow"
            selectedVariantImageId={selectedVariant?.image.id}
            images={props.data.shopifyProduct.images}


          />
        </div>
        <div className="mt-4 md:mt-0 md:w-1/3 md:mx-8">
          <button className=" hidden md:block hover:opacity-80 border-2 text-l px-2 p-1 rounded-full " onClick={() => navigate(-1)}>Revenir aux produits</button>
          <h1 className=" DancingScript title-article text-4xl font-bold" >{props.data.shopifyProduct.title}</h1>
          <p>Matière</p>
          <div class="flex flex-row"></div>
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product?.variants.length > 1 && (

                <div className="flex flex-col  mt-0 ">
                  <Price className="couleurboutique" >{selectedVariant.price} €</Price>
                  <div className="flex flex-col  md:hidden">
                  <p className="  mb-3 title-article text-2xl font-bold DancingScript ">Options</p>
                    <select className="bg-transparent border-boutique  w-32 rounded p-1"
                      value={selectedVariant.id}
                      onChange={handleVariantChange}
                    >
                      {product?.variants.map(v => (
                        <option key={v.id} value={v.id}>
                          {v.selectedOptions.name}
                          {v.title}
                        </option>
                      ))}
                    </select>
                    </div>
                  <div className="   flex flex-col md:flex-row">

                  {!!selectedVariant && (
                  <ProductQuantityAdder
                    available={selectedVariant.available}
                    variantId={selectedVariant.id}
                  />
              )}    <div className="flex flex-col hidden md:block">
                  <p className="  mb-3 title-article text-2xl font-bold DancingScript ">Options</p>
                    <select className="bg-transparent border-boutique  w-32 rounded p-1"
                      value={selectedVariant.id}
                      onChange={handleVariantChange}
                    >
                      {product?.variants.map(v => (
                        <option key={v.id} value={v.id}>
                          {v.selectedOptions.name}
                          {v.title}
                        </option>
                      ))}
                    </select>
                    </div>
                  </div>
                </div>

              )}
              
            </>
          )}
        </div>

      </div>
      <div className=" markdown description mt-14 mb-4  w-11/12 md:w-9/12  m-auto border-2t p-8 pb-10 pt-4 mb-8 "
      >
        <p className="DancingScript title-article text-4xl font-bold ">Description du produit</p>
        <p className=" py-8">{props.data.shopifyProduct.description}</p>
      </div>
    </LayoutBoutique>
  );
}
