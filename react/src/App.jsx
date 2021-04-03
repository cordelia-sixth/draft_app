import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  const ref = useRef();

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {setUsers(response.data)})
    },
    [ref]
  );

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  );
}