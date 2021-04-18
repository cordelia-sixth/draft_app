import React from 'react';
import axios from 'axios';

export const Show = (userId) => {
  const [user, setUser] = React.useState('');

  // axios.get(`localhost:3000/users/${userId}`)
  //   .then(response => {
  //     setUser(response.data);
  //   });

  return (
    <ul>
      {data.map(data => <li>{data}</li>)}
    </ul>
  )
};