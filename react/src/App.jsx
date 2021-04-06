import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Users } from './pages/Users';
import { Show } from './pages/Show';
import { New } from './pages/New';

export const App = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/cordelia" component={Show} />
        <Route exact path="/users/" component={Users} />
        <Route exact path="/users/new" component={New} />
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to my CRUD!</p>
    </div>
  )
};

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const ref = useRef();

//   useEffect(() => {
//     axios.get('http://localhost:3000/users')
//       .then(response => {setUsers(response.data)})
//     },
//     [ref]
//   );

//   return (
//     <div>
//       <h2>Users</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => 
//             <tr>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>Show</td>
//               <td>Edit</td>
//               <td>Destroy</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   )
// };