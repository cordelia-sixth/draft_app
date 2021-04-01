import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { MessageForm } from './componets/MesseageForm';
import { PostRequest } from './componets/PostRequest';
import { DeleteRequest } from './componets/DeleteRequest'
import { Show } from './componets/Show';
const { useState } = React;

const UseAxios = () => {
  const [data, setDate] = useState([]);

  const getRequest = () => {
    axios.get('http://localhost:3000/users')
      .then(res => {setDate(res.data)});
  };

  return (
    <div>
      <button onClick={() => getRequest()}>users</button>
      <ul>
        {data.map(data => <li>{"ID:" + data.id +" "}{data.name}</li>)}
      </ul>
    </div>
  );
};

ReactDOM.render(
  <UseAxios />,
  document.getElementById('get')
);

ReactDOM.render(
  <PostRequest />,
  document.getElementById('post')
);

ReactDOM.render(
  <DeleteRequest />,
  document.getElementById('delete')
);