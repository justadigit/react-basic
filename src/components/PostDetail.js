import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Post Detail of {params.pId}</h1>
    </div>
  );
}

export default PostDetail;
