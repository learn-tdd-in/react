import React, { Component } from 'react';
import NewMessageForm from './NewMessageForm';
import MessageList from './MessageList';

class App extends Component {
  state = { messages: [] };

  handleSend = (newMessage) => {
    this.setState(state => ({
      messages: [newMessage, ...state.messages],
    }));
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <NewMessageForm onSend={this.handleSend} />
        <MessageList data={messages} />
      </div>
    );
  }
}

export default App;
