import React, { useState } from 'react';

const NewMessageForm = () => {
  const [inputText, setInputText] = useState('');

  const handleTextChange = event => {
    setInputText(event.target.value);
  };

  const handleSend = () => {
    setInputText('');
  }

  return (
    <div>
      <input
        type="text"
        data-testid="messageText"
        value={inputText}
        onChange={handleTextChange}
      />
      <button
        data-testid="sendButton"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default NewMessageForm;
