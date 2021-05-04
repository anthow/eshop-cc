import React from 'react';
import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from 'context/CartContext';

export function Cart() {
  const { checkout } = React.useContext(CartContext);
  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity = totalQuantity + lineItem.quantity;
    });
  }
  return (
    <CartWrapper className="mb-3 md:mb-0">
      <img className="w-6" src="https://res.cloudinary.com/anthow/image/upload/v1620127303/Coccinelles%20et%20compagnies/panier-rond-blc_hszoij.svg" />
      <div className="md:text-white text-sm font-regular mt-3 mb-5 md:m-0">
        {totalQuantity} articles(s) / {checkout?.totalPrice || '0.00'}€
      </div>
    </CartWrapper>
  );
}
