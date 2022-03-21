import React, { useContext } from 'react';
import './Cart.css';
import ItemContext from '../../context/ItemContext';
function Cart() {
  const { cartItems, dispatchCart } = useContext(ItemContext);
  return (
    <div className="cart">
      <h3>Cart({!cartItems ? '0' : cartItems.length})</h3>
      {cartItems.length < 1 ? (
        <h1>There is no items</h1>
      ) : (
        cartItems.map((cartitem) => (
          <div className="cartItem" key={cartitem.id}>
            <span className="cartItemName">{cartitem.name}</span>
            <span className="cartItemPrice">{cartitem.price} $</span>
            <button
              className="cartItemButton"
              onClick={() =>
                dispatchCart({ type: 'REMOVE_FROM_CART', payload: cartitem })
              }
            >
              remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
