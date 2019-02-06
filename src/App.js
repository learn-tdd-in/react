import React, { Component } from 'react';
import NewMessageForm from './NewMessageForm';

class App extends Component {
  handleSend = (newMessage) => {
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
