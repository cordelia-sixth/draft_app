import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

export const Edit = (props) => {
  const [user, setUser] = useState({});
  const ref = useRef();
  const userId = props.match.params.id;

  let history = useHistory();
  const effect = true;

  useEffect(() => {
    axios.get('http://localhost:3000/users/' + props.match.params.id)
      .then(res => {setUser(res.data)})
    },
    [effect]
  );

  const update = event => {
    event.preventDefault();
    console.log(event.target.name);
    axios.put(`http://localhost:3000/users/${userId}`,
    {
      name: user.name,
      email: user.email
    })
      .then(res => {
        if (!alert(res.data.success)) {
          console.log(user);
        }
        history.push('/users');
      })
  };

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="Edit">
      <h2>Editing user</h2>
      <form onSubmit={update}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={user.name} onChange={handleChange}></input>
        </div>
        <div>
          <label>Email: </label>
          <input type="text" name="email" value={user.email}></input>
        </div>
        <input type="submit" value="Update"></input>
      </form>

      <Link to="/users">Back</Link>
    </div>
  )
};