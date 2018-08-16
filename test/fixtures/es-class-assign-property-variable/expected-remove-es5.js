"use strict";

var Foo =
/*#__PURE__*/
function (_React$Component) {
  babelHelpers.inherits(Foo, _React$Component);

  function Foo() {
    babelHelpers.classCallCheck(this, Foo);
    return babelHelpers.possibleConstructorReturn(this, (Foo.__proto__ || Object.getPrototypeOf(Foo)).apply(this, arguments));
  }

  babelHelpers.createClass(Foo, [{
    key: "render",
    value: function render() {}
  }]);
  return Foo;
}(React.Component);

var Getter =
/*#__PURE__*/
function (_React$Component2) {
  babelHelpers.inherits(Getter, _React$Component2);

  function Getter() {
    babelHelpers.classCallCheck(this, Getter);
    return babelHelpers.possibleConstructorReturn(this, (Getter.__proto__ || Object.getPrototypeOf(Getter)).apply(this, arguments));
  }

  babelHelpers.createClass(Getter, [{
    key: "render",
    value: function render() {}
  }, {
    key: "foo",
    get: function get() {
      return {
        foo: PropTypes.string
      };
    }
  }]);
  return Getter;
}(React.Component);
