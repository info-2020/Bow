import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { USER_POSTS } from '@/query/users';
import Post from './Post';

const User = ({ user }) => {
  const [getPosts, result] = useLazyQuery(USER_POSTS);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (result.data) {
      console.log(result.data);

      setPosts(result.data.posts.data);
    }
  }, [result]);

  const showUserPosts = (username) => {
    console.log(username);
    getPosts({ variables: { userName: username } });
  };

  if (posts) {
    return (
      <div>
        {posts.map((post) => (
          <div key={post[0]}>
            <Post post={post} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='bb'>
      <h5>User</h5>
      {user.name}
      <img
        src={'http://111.229.124.12:8081/static/' + user.avatar}
        alt={user.name + ' avatar'}
        width='64'
        height='64'
      />
      <button onClick={() => showUserPosts(user.name)}>Posts</button>
    </div>
  );
};

export default User;
