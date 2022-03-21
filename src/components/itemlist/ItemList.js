import React, { useContext } from 'react';
import './ItemList.css';
import ItemContext from '../../context/ItemContext';
import Item from '../item/Item';

function ItemList() {
  const { items } = useContext(ItemContext);

  return (
    <div className="itemList">
      <h1>Item List</h1>

      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
