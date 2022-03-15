import React, { Component } from 'react';

class LifecycleMount extends Component {
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
  render() {
    console.log('Lifecycle render');
    return <div>LifecycleMount</div>;
  }
}

export default LifecycleMount;
