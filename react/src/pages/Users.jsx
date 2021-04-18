// ユーザー一覧を表示する

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link, Route, useHistory } from 'react-router-dom';
import { New } from './New';
import { Edit } from './Edit';

// import Show from './Show';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [updateUsers, setUpdateUsers] = useState([]);
  const [userNum, setUserNum] = useState(0);
  const ref = useRef();

  let history = useHistory();

  useEffect(() => {
    getUsers();
  },
    [users.length]
  );

  const getUsers = () => {
    axios.get('http://localhost:3000/users')
      .then(res => {setUsers(res.data)})
  };

  console.log(users);

  const destroy = (id) => {
    axios.delete("http://localhost:3000/users/" + id)
      .then(res => {
        if (!alert(res.data.success)) {
          history.push("/users");
          getUsers();
        }
      });
  };

  const userFilter = (event) => {
    if (event.target.value === '') {
      setUpdateUsers([]);
    } else {
      let userName = [];
      users.map(user =>　userName.push(user.name));
      const result = userName.filter(user => 
        user.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
      setUpdateUsers(result);
    }
  };

  return (
    <div className="Users">

      <h2>Users</h2>

      <form>
        <input type="text" placeholder="search user" onChange={userFilter} />
      </form>

      <div>
        {updateUsers.map((user, index) => {
          return <li key={index}>{user}</li>
        })}
      </div>

      <br />

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
              <td align="center">
                <Link to={"/users/" + user.id + "/edit"}>Edit</Link>
              </td>
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
