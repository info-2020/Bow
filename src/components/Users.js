import React from 'react';
import User from './User';

const Users = ({ users }) => {
  return (
    <div className='bb'>
      <h5>Users</h5>

      {users.map((user) => (
        <User key={'user-' + user.name} user={user} />
      ))}
    </div>
  );
};

export default Users;
