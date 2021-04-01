import React from 'react';
import axios from 'axios';

export const DeleteRequest = () => {
  const [id, setId] = React.useState('');

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.delete(`http://localhost:3000/users/${id}`,)
      .then(response => {
        alert("Deleted.");
      })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User delete. please enter user ID.
        <input type="text" value={id} onChange={handleChange} />
      </label>
      <input type="submit" value="send"/>
    </form>
  )
};