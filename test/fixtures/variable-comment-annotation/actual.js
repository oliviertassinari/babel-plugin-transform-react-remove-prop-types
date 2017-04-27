import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FooComponent from './FooComponent'

const Foo = connect(() => {}, () => {})(FooComponent);

Foo.propTypes /* remove-proptypes */ = {
  bar: PropTypes.string.isRequired,
}

export default Foo
