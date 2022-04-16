import {useState} from 'react';
import NewMessageForm from './NewMessageForm';

export default function App() {
  const [messages, setMessages] = useState([]);
  function handleSend(newMessage) {
    setMessages([newMessage, ...messages]);
  }

  return <NewMessageForm onSend={handleSend} />;
}
