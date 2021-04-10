import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const Show = () => {
  const [user, setUser] = useState({});
  const ref = useRef();

  let history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:3000' + history.location.pathname)
      .then(res => {setUser(res.data)})
    },
    [ref]
  );

  return (
    <div className="Show">
      <ul>
        <p>Name: {user.name}</p>
        <p>email: {user.email}</p>
      </ul>
    </div>
  )
};