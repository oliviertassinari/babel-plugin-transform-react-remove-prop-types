import React, { Component } from 'react';
export default class Greeting extends Component {
  constructor(props, context) {
    super(props, context);
    const appName = context.store.getState().appName;
    this.state = {
      appName: appName
    };
  }

  render() {
    return <h1>Welcome {this.props.name} and {this.props.friends.join(', ')} to {this.state.appName}</h1>;
  }

}