import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '@/query/users';

const LoginForm = ({ setError, setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      // setError(error.graphQLErrors[0].message)
    }
  });

  useEffect(() => {
    if (result.data) {
      const { data, error } = result.data.submit;
      if (error) {
        setError(error);
      }
      if (data) {
        localStorage.setItem('user-token', data);
        setToken(data);
      }
    }
  }, [result.data]); // eslint-disable-line

  const onSubmit = (event) => {
    event.preventDefault();

    login({
      variables: {
        username,
        password
      }
    });
  };

  return (
    <div className='bb'>
      <form onSubmit={onSubmit}>
        <h2>Login</h2>
        <div>
          username
          <input value={username} onChange={({ target }) => setUsername(target.value)} />
        </div>
        <div>
          password
          <input
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit' variant='cta'>
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
