// ログイン処理
import React, { useState } from 'react';
import axios from 'axios';

export const Login = props => {

  // ユーザデータの初期値を設定
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/login',
      { 
        user: {
          email: email,
          password: password,
        }
      },
      // railsでcookieを扱えるようにする
      { withCredentials: true }
    ).then(response => {
      // ログインに成功したら
      if (response.data.logged_in) {
        props.handleSuccsessfulAuthentication(response.data);
      }
    }).catch(error => {
      console.log("Registration error >> ", error)
    })
  };

  return (
    <div className="Login">
      <hr />
      <p>login</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email" 
          placeholder="email" 
          value={email}
          // クリックイベントを扱えるようにアロー関数を使っている
          onChange={event => {setEmail(event.target.value)}}
        />
        <br/>
        <input 
          type="password" 
          name="password" 
          placeholder="password" 
          value={password}
          onChange={event => {setPassword(event.target.value)}}
        />
        <br/>
        <button type="submit">login</button>
      </form>
    </div>
  )
};