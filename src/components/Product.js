import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const linkStyles = ({ isActive }) => {
  return {
    color: isActive ? 'red' : '',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'none' : 'underline',
  };
};
function Product() {
  return (
    <div>
      <h1>Products</h1>

      <nav style={{ background: 'none' }}>
        <NavLink style={linkStyles} to="featured">
          Featured
        </NavLink>
        <NavLink style={linkStyles} to="new">
          New
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Product;
