import React from 'react';
import { Input } from '../Input';
import { ProductQuantityAdderWrapper } from './styles';
import CartContext from 'context/CartContext';

export function ProductQuantityAdder({ variantId, available }) {
  const [quantity, setQuantity] = React.useState(1);
  const { updateLineItem } = React.useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };

  return (
    <>
      <strong>Quantité</strong>
      <form onSubmit={handleSubmit}>
        <Input
          disabled={!available}
          type="number"
          min="1"
          step="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button type="submit" className="  block mt-5 p-2  w-auto buy-boutique whitespace-nowrap rounded-xl text-white "
 disabled={!available} fullWidth>
          Ajouter au panier
        </button>
      </form>
      </>
  );
}
