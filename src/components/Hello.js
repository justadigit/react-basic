import React, { Component } from 'react';

export class Hello extends Component {
  render() {
    const { name } = this.props;
    // const {state1,state2} = this.state;
    return (
      <div>
        <h1>Hello {name}</h1>
      </div>
    );
  }
}

export default Hello;
