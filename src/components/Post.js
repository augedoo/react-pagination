import React from 'react';

const Post = ({ post }) => {
  return (
    <li className='list-group-item'>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
    </li>
  );
};

export default Post;
