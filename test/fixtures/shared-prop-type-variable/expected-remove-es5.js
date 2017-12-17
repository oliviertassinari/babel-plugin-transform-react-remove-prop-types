"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Foo;

var _react = babelHelpers.interopRequireDefault(require("react"));

var _underscore = require("underscore");

var _bar = babelHelpers.interopRequireDefault(require("./bar"));

var PropTypes = _react.default.PropTypes;
var propTypes = {
  foo: PropTypes.any
};

function Foo(props) {
  var barProps = (0, _underscore.omit)(props, Object.keys(propTypes));
  return _react.default.createElement(_bar.default, barProps);
}
