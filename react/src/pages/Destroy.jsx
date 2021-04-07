import axios from 'axios';

export const destroy = (name) => {
  axios.delete(`http://localhost:3000:/users/${name}`)
    .then(res => alert(res.data.success))
};