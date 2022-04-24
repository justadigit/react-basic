import React from 'react';
import styles from './Signup.module.css';
function Signup() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.signupForm} autoComplete="off">
        <span className={styles.header}>Sign Up</span>
        <div className={styles.formControl}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
          />
        </div>
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
        <div className={styles.formControl}>
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="text"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm your password"
          />
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
