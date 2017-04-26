import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GreetingComponent from './GreetingComponent'

const Greeting = connect(() => {}, () => {})(GreetingComponent);

Greeting.propTypes /* remove-proptypes */ = {
  name: PropTypes.string.isRequired,
}

export default Greeting
