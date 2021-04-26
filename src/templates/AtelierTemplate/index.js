/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { graphql } from 'gatsby';
import {LayoutAtelier} from 'components/Layout/LayoutAtelier'
import {

  ImageGallery,
  ProductQuantityAdder,
  SEO,
} from 'components';
import {  Price } from './styles';
import CartContext from 'context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export const query = graphql`
  query AtelierQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;

export default function AtelierTemplate(props) {
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
    <LayoutAtelier>
      <SEO
        description={props.data.shopifyProduct.description}
        title={props.data.shopifyProduct.title}
      />
      <div className="flex flex-col md:flex-row content-center m-auto w-2/3 mt-10" >
      <div>
          <ImageGallery
            selectedVariantImageId={selectedVariant?.image.id}
            images={props.data.shopifyProduct.images}
            
            
          />
        </div>        <div className="mt-4 md:mt-0 md:w-2/3 md:mx-8"> 
        <button onClick={() => navigate(-1)}>revenir aux produits</button>
          <h1 className="title-article text-4xl font-bold" >{props.data.shopifyProduct.title}</h1>
          <p>matière</p>
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product?.variants.length > 1 && (
                
                  <div className=" flex flex-col  mt-0 ">
                  <Price >{selectedVariant.price} €</Price> 
                  <p className="mb-3 title-article font-bold ">options</p>
                  <div className=" flex flex-row">
                  <select className="bg-transparent p-1"
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
                
              )}
              {!!selectedVariant && (
                <>
                  <ProductQuantityAdder
                    available={selectedVariant.available}
                    variantId={selectedVariant.id}
                  />
                </>
              )}
            </>
          )}
        </div>
       
      </div>
      <div className=" markdown description mt-4 mb-4  w-2/3  m-auto border-2t p-8"
      >
                <h2>Description du produit</h2>
      <p>{props.data.shopifyProduct.description}</p>
</div>
    </LayoutAtelier>
  );
}
