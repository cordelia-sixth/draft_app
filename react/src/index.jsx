import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const { useState } = React;

const UseAxios = () => {
  const [data, setDate] = useState([]);

  const getRequest = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {setDate(res.data)});
  };

  return (
    <div>
      <button onClick={() => getRequest()}>click</button>
      <ul>
        {data.map(data => <li>{data.name}</li>)}
      </ul>
    </div>
  );
};

ReactDOM.render(
  <UseAxios />,
  document.getElementById('root')
);