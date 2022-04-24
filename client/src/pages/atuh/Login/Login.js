import React from 'react';
import styles from './Login.module.css';
function Login() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.loginForm} autoComplete="off">
        <span className={styles.header}>Login</span>
        <div className={styles.formControl}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
