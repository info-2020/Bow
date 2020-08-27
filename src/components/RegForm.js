import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { REG } from '@/query/users';

const RegForm = ({ setError, setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reg, regResult] = useMutation(REG, {
    onError: (error) => setError(error.graphQLErrors[0].message)
  });

  useEffect(() => {
    if (regResult.data) {
      const { error, data } = regResult.data.submit;
      if (error) {
        setError(error);
        return;
      }
      setToken(data);
      localStorage.setItem('book-token', data);
    }
  }, [regResult.data]); //eslint-disable-line

  const onSubmit = (event) => {
    event.preventDefault();
    reg({
      variables: {
        username,
        password
      }
    });
  };

  return (
    <div className='bb'>
      <h2>Reg</h2>
      <form onSubmit={onSubmit}>
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
        <button type='submit'>reg</button>
      </form>
    </div>
  );
};

export default RegForm;
