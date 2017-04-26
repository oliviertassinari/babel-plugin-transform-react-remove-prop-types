'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _GreetingComponent = require('./GreetingComponent');

var _GreetingComponent2 = _interopRequireDefault(_GreetingComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Greeting = (0, _reactRedux.connect)(function () {}, function () {})(_GreetingComponent2.default);

exports.default = Greeting;
