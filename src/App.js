import NewMessageForm from './NewMessageForm';

export default function App() {
  function handleSend() {}

  return <NewMessageForm onSend={handleSend} />;
}
