import React from 'react';
import './App.css';
import ItemList from './components/itemlist/ItemList';
import Cart from './components/cart/Cart';
function View() {
  return (
    <div className="container">
      <ItemList />
      <Cart />
    </div>
  );
}

export default View;
