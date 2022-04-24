import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Post.module.css';
import AVATOR from '../../assets/images/avator.png';
import faker from '@faker-js/faker';
function Post() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/api/v1/posts/${params.pId}?_embed=comments&_expand=author`
      )
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      });
  }, [params.pId]);
  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <div className={styles.container}>
      <div className={styles.authorInfo}>
        <div className={styles.authorWrapper}>
          <img src={AVATOR} alt="" />
        </div>
        <Link to={`/authors/${post.author.id}`}>{post.author.name}</Link>
      </div>
      <div className={styles.post}>
        <span>{post.title}</span>
        <img src={faker.image.city(1234, 2345, true)} alt="" />
        <p>{post.description}</p>
      </div>
    </div>
  );
}

export default Post;
