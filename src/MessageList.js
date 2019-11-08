import React from 'react';

const MessageList = ({ data }) => (
  <ul>
    {data.map(message => (
      <li key={message}>{message}</li>
    ))}
  </ul>
);

export default MessageList;
