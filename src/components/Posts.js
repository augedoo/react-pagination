import React, { Fragment } from 'react';
import Post from './Post';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h5 className='text-primary'>Loading...</h5>;
  } else {
    return (
      <Fragment>
        <ul className='list-group'>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </Fragment>
    );
  }
};

export default Posts;
