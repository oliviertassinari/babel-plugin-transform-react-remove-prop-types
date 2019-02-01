import React from 'react';
import PropTypes from 'prop-types';
const sharedPropType = process.env.NODE_ENV !== "production" ? PropTypes.number : {};
export default class Foo extends React.Component {}
process.env.NODE_ENV !== "production" ? Foo.propTypes = {
  bar: sharedPropType
} : void 0;
