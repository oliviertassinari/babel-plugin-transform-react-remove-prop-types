import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Greeting extends Component {
  constructor (props, context) {
    super(props, context)
    const appName = context.store.getState().appName
    this.state = {
      appName: appName
    }
  }

  render () {
    return <h1>Welcome {this.props.name} to {this.state.appName}</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}

Greeting.contextTypes = {
  store: PropTypes.object
}