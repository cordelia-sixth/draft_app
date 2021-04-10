import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const Edit = (props) => {
  const [user, setUser] = useState({});
  const ref = useRef();
  console.log(props.match.params.id);

  let history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:3000/users/' + props.match.params.id)
      .then(res => {setUser(res.data)})
    },
    [ref]
  );

  console.log(user);

  return (
    <div className="Edit">
      <h2>Editing user</h2>
      <form>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={user.name}></input>
        </div>
        <div>
          <label>Email: </label>
          <input type="text" name="email" value={user.email}></input>
        </div>
        <input type="submit" value="Update"></input>
      </form>
    </div>
  )
};