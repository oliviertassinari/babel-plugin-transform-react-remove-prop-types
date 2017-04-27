'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _FooComponent = require('./FooComponent');

var _FooComponent2 = _interopRequireDefault(_FooComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Foo = (0, _reactRedux.connect)(function () {}, function () {})(_FooComponent2.default);

exports.default = Foo;
