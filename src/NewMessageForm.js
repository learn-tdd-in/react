import React from 'react';

const NewMessageForm = () => {
  return (
    <div>
      <input
        type="text"
        data-testid="messageText"
      />
      <button
        data-testid="sendButton"
      >
        Send
      </button>
    </div>
  );
};

export default NewMessageForm;
