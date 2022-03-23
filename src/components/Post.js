import React from 'react';
import { useNavigate } from 'react-router-dom';

function Post() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Posts List</h1>
      <div>
        <h2>
          Post 1 <button onClick={() => navigate('/posts/1')}>detail</button>
        </h2>
        <h2>
          Post 2 <button onClick={() => navigate('2')}>detail</button>
        </h2>
        <h2>
          Post 3 <button onClick={() => navigate('3')}>detail</button>
        </h2>
      </div>
    </div>
  );
}

export default Post;
