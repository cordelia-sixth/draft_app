// ログイン処理が完了した後にリダイレクトされるページ
// ユーザーのログイン状態を表示
import React from 'react'

export const Dashboard = props => {
  return (
      <div className="Dashboard">
          <h1>Dashboard</h1>
          <h2>status: {props.loggedInStatus}</h2>
      </div>
  )
};