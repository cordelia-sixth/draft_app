// root page(localhost:3000)の役割
// ユーザーのログイン状態を表示
import React from 'react'
import axios from 'axios';

import { Registration } from './Registration';
import { Login } from './Login';

export const Home = props => {

  console.log("Home props >> ", props);  

  // ログインに成功したら実行する
  const handleSuccsessfulAuthentication = data => {
    // /daahboardに遷移
    props.handleLogin(data);
    props.history.push("/dashboard");
  };

  // ログアウトボタンが押されたら実行
  const handleLogoutClick = () => {
    axios.delete("http://localhost:3000/logout", { withCredentials: true })
      .then(response => {
        props.handleLogout();
    }).catch(error => {
        console.log("ログアウトエラー >> ", error);
    })
  };

  return (
      <div>
          <h1>Home</h1>
          <h2>status: {props.loggedInStatus}</h2>
          <button onClick={handleLogoutClick}>logout</button>
          <Registration handleSuccsessfulAuthentication={handleSuccsessfulAuthentication} />
          <Login handleSuccsessfulAuthentication={handleSuccsessfulAuthentication} />
      </div>
  )
};