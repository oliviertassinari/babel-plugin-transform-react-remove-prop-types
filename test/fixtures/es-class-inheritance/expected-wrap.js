"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PureRenderComponent = function (_Component) {
  _inherits(PureRenderComponent, _Component);

  function PureRenderComponent() {
    _classCallCheck(this, PureRenderComponent);

    return _possibleConstructorReturn(this, (PureRenderComponent.__proto__ || Object.getPrototypeOf(PureRenderComponent)).apply(this, arguments));
  }

  return PureRenderComponent;
}(Component);

var Foo1 = function (_PureRenderComponent) {
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

process.env.NODE_ENV !== "production" ? Foo1.propTypes = {
  foo1: PropTypes.string.isRequired
} : void 0;

var Foo2 = function (_PureRenderComponent2) {
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

process.env.NODE_ENV !== "production" ? Foo2.propTypes = {
  foo2: PropTypes.string.isRequired
} : void 0;