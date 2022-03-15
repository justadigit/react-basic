import axios from 'axios';
import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: '',
    };
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/post123')
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMsg: 'Error retreiving data' });
      });
  }
  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1>PostList</h1>
        {posts.length > 0
          ? posts.map((post) => {
              return (
                <div key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <hr />
                </div>
              );
            })
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
