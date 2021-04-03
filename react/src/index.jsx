import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { App } from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// const { useState } = React;

// const UseAxios = () => {
//   const [data, setDate] = useState([]);

//   const getRequest = () => {
//     axios.get('http://localhost:3000/users')
//       .then(res => {setDate(res.data)});
//   };

//   return (
//     <div>
//       <button onClick={() => getRequest()}>users</button>
//       <ul>
//         {data.map(data => <li>{"ID:" + data.id +" "}{data.name}</li>)}
//       </ul>
//     </div>
//   );
// };

// // ReactDOM.render(
// //   <UseAxios />,
// //   document.getElementById('root')
// // );

// // ReactDOM.render(
// //   <PostRequest />,
// //   document.getElementById('post')
// // );