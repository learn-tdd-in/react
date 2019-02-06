import React, { Component } from 'react';

export default class NewMessageForm extends Component {
  state = { inputText: '' }

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  render() {
    const { inputText } = this.state;

    return (
      <div>
        <input
          type="text"
          data-testid="messageText"
          value={inputText}
          onChange={this.handleTextChange}
        />
        <button
          data-testid="sendButton"
        >
          Send
        </button>
      </div>
    );
  }
}
