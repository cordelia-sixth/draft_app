import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  BrowserRouter as Router,
  Link
} from 'react-router-dom';


export const Users = () => {
  const [users, setUsers] = useState([]);

  // useEffect( () => {
  //   axios.get('http://localhost:3000/users')
  //     .then(response => {setUsers(response.data)});
  // });

  return (
    <Router>
      <div>
        <ul>
          <Link to="#">{users.map(user => <li>{user.name}</li>)}</Link>
        </ul>
    </div>
    </Router>
  )
};