import React, { useState } from 'react';
// import { useApolloClient, useQuery } from '@apollo/client';
// import Users from '@/components/Users';
// import Notify from '@/components/Notify';
// import LoginForm from '@/components/LoginForm';
// import RegForm from '@/components/RegForm';
// import Spaces from '@/components/Spaces';
// import { ALL_USERS } from '@/query/users';
import { Link } from 'react-router-dom';

const Home = () => {
  // const [errorMsg, setErrorMessage] = useState(null);
  // const [token, setToken] = useState(null);
  // const result = useQuery(ALL_USERS);
  // const client = useApolloClient();

  // console.log('cat Query:', result);

  // if (result.loading) {
  //   return <div>loading...</div>;
  // }
  // const logout = () => {
  //   setToken(null);
  //   localStorage.clear();
  //   client.resetStore();
  // };

  // const notify = (message) => {
  //   setErrorMessage(message);
  //   setTimeout(() => {
  //     setErrorMessage(null);
  //   }, 1000);
  // };

  return (
    <div>
      <div>这是React 社区首页</div>
      {/* {!token ? (
        <div>
          <LoginForm setToken={setToken} setError={notify} />
          <RegForm setError={notify} setToken={setToken} />
        </div>
      ) : (
        <button onClick={logout}>logout</button>
      )}
      <Notify errorMsg={errorMsg} />
      <Users users={result.data.posts.data} />
      <Spaces /> */}
      <br />
      <Link to='/issue'>跳转发布页</Link>
    </div>
  );
};

export default Home;
