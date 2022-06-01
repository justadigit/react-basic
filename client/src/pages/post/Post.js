import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import styles from './Post.module.css';
import AVATOR from '../../assets/images/avator.png';
import faker from '@faker-js/faker';
import RefresherContext from '../../context/refresher/RefresherContext';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Post() {
  //consuming provided value
  const auth = useAuth();
  const { refresh, setRefresh } = useContext(RefresherContext);

  const params = useParams();

  //state management
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  //state for update post modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  //getting data from fetching APIs
  useEffect(() => {
    const postRequest = axios.get(
      `http://localhost:4000/api/v1/posts/${params.pId}?_expand=author`
    );
    const commentsRequest = axios.get(
      `http://localhost:4000/api/v1/posts/${params.pId}/comments?_expand=author`
    );
    axios
      .all([postRequest, commentsRequest])
      .then(
        axios.spread((postResponse, commentsResponse) => {
          setPost(postResponse.data);
          setComments(commentsResponse.data);
          setLoading(false);
        })
      )
      .catch((err) => {
        auth.setErrorMsg('Something Wrong');
        setLoading(false);
      });
  }, [params.pId, refresh]);

  //commenter
  const [commentText, setCommentText] = useState('');
  const handleComment = (event) => {
    event.preventDefault();
    if (auth.userInfo.email) {
      const newComment = {
        postId: post.id,
        authorId: auth.userInfo.id,
        comment: commentText,
      };
      auth.createComment(newComment);
      setRefresh(refresh + 1);
      setCommentText('');
    } else {
      alert('You Need to Login!');
    }
  };

  //delete comment
  const deleteCommentHandler = (comment) => {
    auth.deleteComment(comment);
    setRefresh(refresh + 1);
    function deleted() {
      alert('Deleted');
    }
    setTimeout(deleted, 100);
  };

  //delete post
  const deletePost = (post) => {
    auth.deletePost(post);
  };

  //update Post
  const handleUpdateButton = () => {
    setShow(true);
    setupdatedPost({
      utitle: post.title,
      udescription: post.description,
    });
  };
  const initialUpdateState = {
    utitle: '',
    udescription: '',
  };
  const [fill, setFill] = useState(false);
  const [updatedPost, setupdatedPost] = useState(initialUpdateState);
  const [errorMsg, setErrorMsg] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setupdatedPost({ ...updatedPost, [name]: value });
    if (
      updatedPost.utitle.trim().length > 0 &&
      updatedPost.udescription.trim().length > 0
    ) {
      setFill(false);
    } else {
      setFill(true);
    }
  };
  const handleUpdatePost = (e) => {
    e.preventDefault();
    const update = {
      id: post.id,
      title: updatedPost.utitle,
      description: updatedPost.udescription,
    };
    if (fill) {
      setErrorMsg('Fills all fileds');
    } else {
      auth.updatePost(update);
    }

    setShow(false);
  };

  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <div className={styles.container}>
      <section className={styles.authorInfo}>
        <div className={styles.authorWrapper}>
          <img src={AVATOR} alt="" />
        </div>
        <Link to={`/authors/${post.author.id}`}>{post.author.name}</Link>
      </section>
      <section className={styles.post}>
        <span className={styles.postTitle}>
          {post.title}
          {post.author.email === auth.userInfo.email && (
            <div className={styles.actionButtons}>
              <button
                className={styles.updatePost}
                onClick={handleUpdateButton}
              >
                Update
              </button>
              <button
                className={styles.deletePost}
                onClick={() => deletePost(post)}
              >
                Delete
              </button>
            </div>
          )}
        </span>
        <img src={faker.image.nature(1234, 2345, true)} alt="" />
        <p>{post.description}</p>
      </section>
      <section className={styles.comments}>
        <span className={styles.commentsCount}>
          {comments.length ? `${comments.length} comments` : ``}
        </span>
        {comments.map((comment) => (
          <div className={styles.comment} key={comment.id}>
            <div className={styles.commenterWrapper}>
              <img src={AVATOR} alt="" />
            </div>
            <div>
              <div className={styles.commenterInfo}>
                <Link to={`/authors/${comment.author.id}`}>
                  {comment.author.name}
                </Link>
                <span>{comment.comment}</span>
              </div>
              {comment.author.email === sessionStorage.getItem('email') && (
                <button
                  className={styles.deleteComment}
                  onClick={() => deleteCommentHandler(comment)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </section>
      <section className={styles.commentBox}>
        <form action="" onSubmit={handleComment}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="your comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
          <button disabled={commentText.trim().length > 0 ? false : true}>
            comment
          </button>
        </form>
      </section>
      <>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {' '}
            <form
              action=""
              className={styles.updatePostForm}
              autoComplete="off"
              onSubmit={handleUpdatePost}
            >
              <div className={styles.formControl}>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="utitle"
                  name="utitle"
                  value={updatedPost.utitle}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="textarea">Description</label>
                <textarea
                  name="udescription"
                  id="udescription"
                  cols="30"
                  rows="100"
                  value={updatedPost.udescription}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button>Update</button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}

export default Post;
