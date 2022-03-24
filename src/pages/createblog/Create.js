import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogsContext from '../../context/BlogContext';
import styles from './Create.module.css';
const initialState = {
  title: '',
  type: '',
  description: '',
};
function Create() {
  let navigate = useNavigate();
  const { blogDispatch } = useContext(BlogsContext);
  const [formValue, setFormValue] = useState(initialState);
  const formValueHandler = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newblog = {
      id: Math.random(),
      title: formValue.title,
      type: formValue.type,
      description: formValue.description,
    };
    blogDispatch({ type: 'BLOG_CREATE', payload: newblog });
    setFormValue(initialState);
    navigate('/');
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.header}>Create Post</span>
        <form className={styles.createForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className={styles.createInput}
            value={formValue.title}
            onChange={formValueHandler}
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            className={styles.createInput}
            value={formValue.type}
            onChange={formValueHandler}
          />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            className={styles.createTextarea}
            value={formValue.description}
            onChange={formValueHandler}
          ></textarea>
          <button className={styles.createButton}>Create Post</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
