// ユーザー登録機能と新規登録後にログインさせる
import React, { useState } from 'react';
import axios from 'axios';

export const Registration = props => {

  // ユーザデータの初期値を設定
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Registration handleSubmit");
    axios.post('http://localhost:3000/signup',
      {
        user: {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        }
      },
      // railsでcookieを扱えるようにする
      { withCredentials: true }
    ).then(response => {
      console.log("Registration response >> ", response)
      // ログインに成功したら
      if (response.data.status === "created") {
        props.handleSuccsessfulAuthentication(response.data);
      }
    }).catch(error => {
      console.log("Registration error >> ", error)
    })
  };

  return (
    <div className="Registration">
      <hr />
      <p>sign up</p>

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
        <input
          type="password"
          name="password_confirmation"
          placeholder="confirmation"
          value={passwordConfirmation} 
          onChange={event => {setPasswordConfirmation(event.target.value)}}  
        />
        <br/>
        <button type="submit">sign up</button>
      </form>
    </div>
  )
};