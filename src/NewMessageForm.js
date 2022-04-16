import {useState} from 'react';

export default function NewMessageForm({onSend}) {
  const [inputText, setInputText] = useState('');

  function handleTextChange(event) {
    setInputText(event.target.value);
  }

  function handleSend() {
    onSend(inputText);
    setInputText('');
  }

  return (
    <>
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
    </>
  );
}
