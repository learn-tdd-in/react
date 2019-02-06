import React, { Component } from 'react';
import NewMessageForm from './NewMessageForm';

class App extends Component {
  state = { messages: [] };

  handleSend = (newMessage) => {
    this.setState(state => ({
      messages: [newMessage, ...state.messages],
    }));
  }

  render() {
    return (
      <div>
        <NewMessageForm onSend={this.handleSend} />
      </div>
    );
  }
}

export default App;
