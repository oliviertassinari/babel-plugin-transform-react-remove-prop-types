import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ParentComponent from './Parent'

export default class Greeting extends ParentComponent {
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

Greeting.propTypes /* remove-proptypes */ = {
  name: PropTypes.string.isRequired,
}
