import React from 'react';
import { SPACES } from '@/query/users';
import { useQuery } from '@apollo/client';

const Spaces = () => {
  const result = useQuery(SPACES);

  if (result.loading) {
    return <div>loading...</div>;
  }
  if (result.data.posts.data) {
    return (
      <div className='bb'>
        <h2>Spaces</h2>
        {result.data.posts.data.map((s) => (
          <div key={s.name}>
            {s.name}
            <img
              src={'http://127.0.0.1:3000/static/' + s.icon}
              width='64'
              height='64'
              alt={s.name}
            />
          </div>
        ))}
      </div>
    );
  }
};

export default Spaces;
