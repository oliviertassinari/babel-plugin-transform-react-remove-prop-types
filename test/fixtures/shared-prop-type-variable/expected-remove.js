'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Foo;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _bar = require('./bar');

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = _react2.default.PropTypes;


var propTypes = {
  foo: PropTypes.any
};

function Foo(props) {
  var barProps = (0, _underscore.omit)(props, Object.keys(propTypes));
  return _react2.default.createElement(_bar2.default, barProps);
}