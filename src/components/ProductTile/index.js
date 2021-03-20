import React from 'react';
import { ProductTileWrapper, Title, Price } from './styles';
import Img from 'gatsby-image';
import { StyledLink } from '../StyledLink';
import styled from "styled-components"


const StyledImg = styled(Img)`
@media screen and ( max-width: 1024px ) {
  width: auto; 
  }
  display: block;
  margin: 0 auto;
  width: 250px;
  height:250px;
`

export function ProductTile({
  title,
  imageFluid,
  minPrice,
  handle,
}) {
  return (
    <div className="block rounded-lg mb-5 shadow hover:shadow-2xl w-11/12 md:w-full">
      <StyledLink to={`/products/${handle}`}>
      <div className="relative w-full pb-full">
      <StyledImg  fluid={imageFluid} />
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
