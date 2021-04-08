import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { New } from './New';

// import Show from './Show';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const ref = useRef();

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {setUsers(response.data)})
    },
    [ref]
  );

  const destroy = (id) => {
    axios.delete("http://localhost:3000/users/" + id)
      .then(res => alert(res.data.success));
  };

  return (
    <div className="Users">

      <h2>Users</h2>

      <table width="600">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => 
            <tr>
              <td align="center">{user.name}</td>
              <td align="center">{user.email}</td>
              <td align="center">
                <Link to={"/users/" + user.id}>Show</Link>
              </td>
              <td align="center">Edit</td>
              <td align="center">
                <Link to="/users/" onClick={() => destroy(user.id)}>Delete</Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div>
        <Link to="/users/new">New User</Link>
      </div>
    </div>
  )
};
