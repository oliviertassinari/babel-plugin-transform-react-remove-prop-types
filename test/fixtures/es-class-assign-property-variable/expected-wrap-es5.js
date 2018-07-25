"use strict";

var propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};;

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

Foo.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
