"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Foo3 = void 0;

var _class, _temp;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PureRenderComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PureRenderComponent, _Component);

  function PureRenderComponent() {
    _classCallCheck(this, PureRenderComponent);

    return _possibleConstructorReturn(this, (PureRenderComponent.__proto__ || Object.getPrototypeOf(PureRenderComponent)).apply(this, arguments));
  }

  return PureRenderComponent;
}(Component);

var Foo1 =
/*#__PURE__*/
function (_PureRenderComponent) {
  _inherits(Foo1, _PureRenderComponent);

  function Foo1() {
    _classCallCheck(this, Foo1);

    return _possibleConstructorReturn(this, (Foo1.__proto__ || Object.getPrototypeOf(Foo1)).apply(this, arguments));
  }

  _createClass(Foo1, [{
    key: "render",
    value: function render() {}
  }]);

  return Foo1;
}(PureRenderComponent);

Foo1.propTypes = process.env.NODE_ENV !== "production" ? {
  foo1: PropTypes.string.isRequired
} : {};

var Foo2 =
/*#__PURE__*/
function (_PureRenderComponent2) {
  _inherits(Foo2, _PureRenderComponent2);

  function Foo2() {
    _classCallCheck(this, Foo2);

    return _possibleConstructorReturn(this, (Foo2.__proto__ || Object.getPrototypeOf(Foo2)).apply(this, arguments));
  }

  _createClass(Foo2, [{
    key: "render",
    value: function render() {}
  }]);

  return Foo2;
}(PureRenderComponent);

Foo2.propTypes = process.env.NODE_ENV !== "production" ? {
  foo2: PropTypes.string.isRequired
} : {}; // With no inheritance

var Foo3 = (_temp = _class =
/*#__PURE__*/
function () {
  function Foo3() {
    _classCallCheck(this, Foo3);
  }

  _createClass(Foo3, [{
    key: "render",
    value: function render() {}
  }]);

  return Foo3;
}(), Object.defineProperty(_class, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    foo3: PropTypes.string
  }
}), _temp);
exports.Foo3 = Foo3;
