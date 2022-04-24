import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
function Navbar() {
  return (
    <div className={styles.container}>
      <nav>
        <Link className={styles.navHeader} to="/">
          Posts-Comments
        </Link>
        <ul className={styles.navMenu}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/authors">Authors</NavLink>
          <NavLink to="/newpost">New Post</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
