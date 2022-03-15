import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }
  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
    console.log(this.state.username);
  };
  render() {
    return (
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsername}
          />
        </div>
      </form>
    );
  }
}

export default Form;
