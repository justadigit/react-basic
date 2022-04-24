import React from 'react';
import styles from './NewPost.module.css';
function NewPost() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.newpostForm} autoComplete="off">
        <span className={styles.header}>Create New Post</span>
        <div className={styles.formControl}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="textarea">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="30"
          ></textarea>
        </div>

        <button>Create</button>
      </form>
    </div>
  );
}

export default NewPost;
