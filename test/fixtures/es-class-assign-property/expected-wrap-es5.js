"use strict";

var Foo1 =
/*#__PURE__*/
function (_React$Component) {
  babelHelpers.inherits(Foo1, _React$Component);

  function Foo1() {
    babelHelpers.classCallCheck(this, Foo1);
    return babelHelpers.possibleConstructorReturn(this, (Foo1.__proto__ || Object.getPrototypeOf(Foo1)).apply(this, arguments));
  }

  babelHelpers.createClass(Foo1, [{
    key: "render",
    value: function render() {}
  }]);
  return Foo1;
}(React.Component);

Foo1.propTypes = process.env.NODE_ENV !== "production" ? {
  bar1: PropTypes.string
} : {};

var Foo2 =
/*#__PURE__*/
function (_React$PureComponent) {
  babelHelpers.inherits(Foo2, _React$PureComponent);

  function Foo2() {
    babelHelpers.classCallCheck(this, Foo2);
    return babelHelpers.possibleConstructorReturn(this, (Foo2.__proto__ || Object.getPrototypeOf(Foo2)).apply(this, arguments));
  }

  babelHelpers.createClass(Foo2, [{
    key: "render",
    value: function render() {}
  }]);
  return Foo2;
}(React.PureComponent);

Foo2.propTypes = process.env.NODE_ENV !== "production" ? {
  bar2: PropTypes.string
} : {};
