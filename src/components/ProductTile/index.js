import React from 'react';
import { ProductTileWrapper, Title, Price } from './styles';
import Img from 'gatsby-image';
import { StyledLink } from '../StyledLink';

export function ProductTile({
  title,
  imageFluid,
  minPrice,
  handle,
}) {
  return (
    <div className="block rounded-lg mb-5 shadow hover:shadow-2xl">
      <StyledLink to={`/products/${handle}`}>
      <div className="relative pb-full">
      <Img  fluid={imageFluid}
         style={{  width: '250px', height:'250px' }} />
      </div>
      <div className="bg-white p-4">
      <div className="font-bold text-2xl">
      <Title>{title}</Title>
      </div>
      <div className="font-semibold text-l">
      <Price>{parseFloat(minPrice).toFixed(2)} euros</Price>
      </div>
      </div>
      </StyledLink>
      </div>
  );
}
