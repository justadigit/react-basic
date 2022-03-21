import './Item.css';
import React, { useContext } from 'react';
import ItemContext from '../../context/ItemContext';
function Item({ item }) {
  const { dispatchCart } = useContext(ItemContext);
  return (
    <div className="item">
      <span className="itemName">{item.name}</span>
      <span className="itemPrice">{item.price} $</span>
      <button
        className="itemButton"
        onClick={() => dispatchCart({ type: 'ADD_TO_CART', payload: item })}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
