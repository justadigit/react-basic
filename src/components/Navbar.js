import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  const linkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };
  return (
    <nav>
      <NavLink style={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={linkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={linkStyles} to="/products">
        Products
      </NavLink>
      <NavLink style={linkStyles} to="/posts">
        Posts
      </NavLink>
    </nav>
  );
}

export default Navbar;
