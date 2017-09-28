"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _FooComponent = _interopRequireDefault(require("./FooComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Foo = (0, _reactRedux.connect)(function () {}, function () {})(_FooComponent.default);
var _default = Foo;
exports.default = _default;
