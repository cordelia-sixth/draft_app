import React from 'react';
import axios from 'axios';

export const PostRequest = () => {
  const [message, setMessage] = React.useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/users',{
      name: message
    }).then(response => {
      alert(response.data.success);
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        please your name
        <input type="text" value={message} onChange={handleChange} />
      </label>
      <input type="submit" value="send"/>
    </form>
  )
};