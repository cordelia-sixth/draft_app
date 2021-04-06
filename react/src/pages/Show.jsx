import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { 
  Route,
  Link,
  Switch,
  useParams
} from 'react-router-dom';

export const Show = () => {
  const [user, setUser] = useState({});
  const ref = useRef();

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {setUser(response.data[0])})
    },
    [ref]
  );

  console.log(user);

  return (
    <div className="Show">
      <ul>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>email: {user.email}</p>
      </ul>
    </div>
  )
};