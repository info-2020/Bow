import React from 'react';

const Post = ({ post }) => {
  return (
    <div className='bb'>
      <h5>Post</h5>
      <div>{post[0]}</div>
      <div>{post[1]}</div>
      <div>{post[2]}</div>
    </div>
  );
};

export default Post;
