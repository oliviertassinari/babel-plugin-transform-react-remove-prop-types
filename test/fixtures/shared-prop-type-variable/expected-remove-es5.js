"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Foo;

var _react = _interopRequireDefault(require("react"));

var _underscore = require("underscore");

var _bar = _interopRequireDefault(require("./bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = _react.default.PropTypes;
var propTypes = {
  foo: PropTypes.any
};

function Foo(props) {
  var barProps = (0, _underscore.omit)(props, Object.keys(propTypes));
  return _react.default.createElement(_bar.default, barProps);
}