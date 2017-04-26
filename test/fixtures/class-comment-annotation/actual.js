import React from 'react'
import PropTypes from 'prop-types'
import ParentComponent from './Parent'

export default class Foo extends ParentComponent {
  render () {}
}

Foo.propTypes /* remove-proptypes */ = {
  bar: PropTypes.string.isRequired,
}
