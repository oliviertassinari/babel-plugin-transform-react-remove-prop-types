"use strict";

var shapePropType = process.env.NODE_ENV !== "production" ? PropTypes.shape({
  foo: PropTypes.string
}) : {};

var ComponentA = function ComponentA() {
  return React.createElement("div", null);
};

ComponentA.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: shapePropType.isRequired
} : {};
var somePropTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string,
  bar: PropTypes.number
} : {};

var ComponentB = function ComponentB() {
  return React.createElement("div", null);
};

ComponentB.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: somePropTypes.foo.isRequired
} : {};
var somePropTypesC = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string,
  bar: PropTypes.number
} : {};

var ComponentC = function ComponentC() {
  return React.createElement("div", null);
};

ComponentC.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: somePropTypesC['foo'].isRequired
} : {};
var somePropTypesD = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string,
  bar: PropTypes.number
} : {};

var ComponentD = function ComponentD() {
  return React.createElement("div", null);
};

var foo = {
  bar: 'foo'
};
ComponentD.propTypes = process.env.NODE_ENV !== "production" ? babelHelpers.defineProperty({}, foo.bar, somePropTypesD['foo'].isRequired) : {};
