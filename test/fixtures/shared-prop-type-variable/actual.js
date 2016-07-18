import React from 'react';
import {omit} from 'underscore';

import Bar from './bar';

const {PropTypes} = React;

const propTypes = {
  foo: PropTypes.any,
};

export default function Foo(props) {
  const barProps = omit(props, Object.keys(propTypes));
  return <Bar {...barProps} />;
}

Foo.propTypes = propTypes;
