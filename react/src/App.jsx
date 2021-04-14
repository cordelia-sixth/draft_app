// routerの役割
// ユーザのログイン状態をチェックする
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Home } from './login/Home';
import { Dashboard } from './login/Dashboard';

export const App = () => {

  // ログインの状態
  const [loggedInStatus, setLoggedInStatus] = useState("not login");
  // ユーザー情報
  const [user, setUser] = useState({});

  // 
  const handleLogin = data => {
    setLoggedInStatus("login");
    setUser(data.user);
  };

  // レンダリング毎にユーザーのログイン状態をチェックする
  useEffect(() => {
    checkLoginStatus();
  });

  // ユーザーのログイン状態をチェックする
  const checkLoginStatus = () => {
    axios.get('http://localhost:3000/logged_in', { withCredentials: true })
      .then(response => {
        console.log("ログイン状況 >> ", response)
        if (response.data.logged_in && loggedInStatus === "not login") {
          setLoggedInStatus("login");
          setUser(response.data.user);
        } else if (!response.data.logged_in && loggedInStatus === "login") {
          setLoggedInStatus("not login");
          setUser({});
        }
    }).catch(error => {
        console.log("ログインエラー >> ", error)
    })
  };

  const handleLogout = () => {
    setLoggedInStatus("not login");
    setUser({});
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* 
          HomeとDashboardに自身のpropsを渡す 
          これでHomeとDashboardでAppが持つ状態、関数、イベントオブジェクトなどが扱える
          */}
          <Route exact path={"/"} 
            render={props => (<Home { ...props }
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              loggedInStatus={loggedInStatus}
            />)}
          />
          <Route exact path={"/dashboard"}
            render={props => (<Dashboard {...props}
              loggedInStatus={loggedInStatus} 
            />)}
          />
        </Switch>
      </Router>
    </div>
  )
};


// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import {
//   Route,
//   Link,
//   Switch
// } from 'react-router-dom';

// import { Users } from './pages/Users';
// import { Show } from './pages/Show';
// import { New } from './pages/New';
// import { Edit } from './pages/Edit';

// export const App = () => {
//   return (
//     <div className="App">
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/users">Users</Link>
//         </li>
//       </ul>
//       <div>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/users/new" component={New} />
//           <Route exact path="/users/:id" component={Show} />
//           <Route exact path="/users/:id/edit" component={Edit} />
//           <Route exact path="/users/" component={Users} />
//         </Switch>
//       </div>
//     </div>
//   );
// }

// const Home = () => {
//   return (
//     <div>
//       <h2>Home</h2>
//       <p>Welcome to my CRUD!</p>
//     </div>
//   )
// };

// // const Users = () => {
// //   const [users, setUsers] = useState([]);
// //   const ref = useRef();

// //   useEffect(() => {
// //     axios.get('http://localhost:3000/users')
// //       .then(response => {setUsers(response.data)})
// //     },
// //     [ref]
// //   );

// //   return (
// //     <div>
// //       <h2>Users</h2>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Email</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.map(user => 
// //             <tr>
// //               <td>{user.name}</td>
// //               <td>{user.email}</td>
// //               <td>Show</td>
// //               <td>Edit</td>
// //               <td>Destroy</td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   )
// // };