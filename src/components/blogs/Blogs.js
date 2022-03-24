import React, { useContext } from 'react';
import { useAuth } from '../../context/AuthContext';
import BlogsContext from '../../context/BlogContext';
import styles from './Blogs.module.css';
function Blogs() {
  const { blogs, blogDispatch } = useContext(BlogsContext);
  const auth = useAuth();
  console.log(blogs);
  return (
    <div className={styles.blogsContainer}>
      <div className={styles.blogslist}>
        {blogs.map((blog) => (
          <div className={styles.blog} key={blog.id}>
            <span className={styles.blogTitle}>{blog.title}</span>
            <span className={styles.blogType}>{blog.type}</span>
            <p className={styles.blogDescription}>{blog.description}</p>
            {auth.user && (
              <button
                className={styles.blogDelete}
                onClick={() =>
                  blogDispatch({ type: 'BLOG_DELETE', payload: blog })
                }
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
