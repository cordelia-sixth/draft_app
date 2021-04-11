// Reactをimportする
import React from 'react'

export const MessageForm = () => {
  const [message, setMessage] = React.useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('次のメッセージが送信されました: ' + message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>メッセージ
        <input type="text" value={message} onChange={handleChange} />
      </label>
      <input type="submit" value="送信" />
    </form>
  );
};