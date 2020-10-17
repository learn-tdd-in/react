import React from 'react';
import NewMessageForm from './NewMessageForm';

const App = () => {
  const handleSend = newMessage => {};

  return (
    <div>
      <NewMessageForm onSend={handleSend} />
    </div>
  );
};

export default App;
