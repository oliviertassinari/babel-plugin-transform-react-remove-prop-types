"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = babelHelpers.interopRequireDefault(require("react"));

var _propTypes = babelHelpers.interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _FooComponent = babelHelpers.interopRequireDefault(require("./FooComponent"));

var Foo = (0, _reactRedux.connect)(function () {}, function () {})(_FooComponent.default);
var _default = Foo;
exports.default = _default;
