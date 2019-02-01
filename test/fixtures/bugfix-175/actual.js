import React from 'react';
import PropTypes from 'prop-types';

const sharedPropType = PropTypes.number;

export default class Foo extends React.Component {
  static propTypes = {
    bar: sharedPropType,
  }
}
