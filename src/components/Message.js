import React, { Component } from 'react';

export class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome to Myanmar',
    };
  }
  changeMessage() {
    this.setState({
      message: 'Thank you for your Visiting!',
    });
  }
  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={() => this.changeMessage()}>Visit</button>
      </div>
    );
  }
}

export default Message;
