import React, { Component } from 'react';

class LifecycleUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John',
    };
    console.log('Lifecycle constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle getDerivedStateFromProps ');
    return null;
  }

  componentDidMount() {
    console.log('Lifecycle componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('Lifecycle shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Lifecycle getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    console.log('Lifecycle componentDidUpdate');
  }

  changeState = () => {
    this.setState({
      name: 'Harry',
    });
  };
  render() {
    console.log('Lifecycle render');
    return (
      <div>
        Lifecycle Update <br />{' '}
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}

export default LifecycleUpdate;
