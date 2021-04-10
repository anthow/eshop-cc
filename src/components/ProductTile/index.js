import React from 'react';
import { Title, Price } from './styles';
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
    <div className=" rounded-lg mb-5 mr-5 m-auto  w-full">
      <StyledLink to={`/products/${handle}`}>
      <div className="relative w-full pb-full">
      <StyledImg  fluid={imageFluid} />
      </div>
      <div className="bg-white">
      <div className=" title-article">
      <Title>{title}</Title>
      </div>
      <div className=" text-l">
      <Price>{parseFloat(minPrice).toFixed(2)} euros</Price>
      </div>
      </div>
      </StyledLink>
      </div>
  );
}
