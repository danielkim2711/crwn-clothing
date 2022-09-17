import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      {cartItems.map((cartItem) => (
        <div key={cartItem.id}>
          <img src={cartItem.imageUrl} alt={cartItem.name} />
          <h1>{cartItem.name}</h1>
          <p>
            {cartItem.quantity} x ${cartItem.price}
          </p>
          <button onClick={() => addItemToCart(cartItem)}>Increment</button>
          <button onClick={() => removeItemFromCart(cartItem)}>
            Decrement
          </button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
