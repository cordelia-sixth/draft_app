import React, { useState } from 'react';
import axios from 'axios';

export const New = () => {
  const [value, setValue] = useState({
    name: "",
    email: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/users', value)
      .then(response => { alert(response.data.success) });
  };

  const handleChange = event => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  return (
    <div className="New">
      <h2>New User</h2>

      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        
        <p>
          <label>
            Email:
            <input type="text" name="email" onChange={handleChange} />
          </label>
        </p>

        <input type="submit" onSubmit={handleSubmit} value="Create User"></input>
      </form>
    </div>
  )
};