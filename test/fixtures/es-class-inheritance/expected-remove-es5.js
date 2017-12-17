"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Foo3 = void 0;

var _class, _temp;

var PureRenderComponent =
/*#__PURE__*/
function (_Component) {
  babelHelpers.inherits(PureRenderComponent, _Component);

  function PureRenderComponent() {
    babelHelpers.classCallCheck(this, PureRenderComponent);
    return babelHelpers.possibleConstructorReturn(this, (PureRenderComponent.__proto__ || Object.getPrototypeOf(PureRenderComponent)).apply(this, arguments));
  }

  return PureRenderComponent;
}(Component);

var Foo1 =
/*#__PURE__*/
function (_PureRenderComponent) {
  babelHelpers.inherits(Foo1, _PureRenderComponent);

  function Foo1() {
    babelHelpers.classCallCheck(this, Foo1);
    return babelHelpers.possibleConstructorReturn(this, (Foo1.__proto__ || Object.getPrototypeOf(Foo1)).apply(this, arguments));
  }

  babelHelpers.createClass(Foo1, [{
    key: "render",
    value: function render() {}
  }]);
  return Foo1;
}(PureRenderComponent);

var Foo2 =
/*#__PURE__*/
function (_PureRenderComponent2) {
  babelHelpers.inherits(Foo2, _PureRenderComponent2);

  function Foo2() {
    babelHelpers.classCallCheck(this, Foo2);
    return babelHelpers.possibleConstructorReturn(this, (Foo2.__proto__ || Object.getPrototypeOf(Foo2)).apply(this, arguments));
  }

  babelHelpers.createClass(Foo2, [{
    key: "render",
    value: function render() {}
  }]);
  return Foo2;
}(PureRenderComponent);

// With no inheritance
var Foo3 = (_temp = _class =
/*#__PURE__*/
function () {
  function Foo3() {
    babelHelpers.classCallCheck(this, Foo3);
  }

  babelHelpers.createClass(Foo3, [{
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
