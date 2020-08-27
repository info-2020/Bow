import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { USER_POSTS } from '@/query/users';

const Subscriptions = ({ users }) => {
  const [getPosts, result] = useLazyQuery(USER_POSTS);
  const [posts, setPosts] = useState(null);

  const showUserPosts = (username) => {
    console.log(username);
    getPosts({ variables: { userName: username } });
  };
  useEffect(() => {
    if (result.data) {
      console.log(result.data);

      setPosts(result.data.posts.data);
    }
  }, [result]);

  return <div></div>;
};

export default Subscriptions;
