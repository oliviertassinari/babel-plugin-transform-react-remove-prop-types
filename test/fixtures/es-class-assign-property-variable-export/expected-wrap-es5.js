"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = void 0;
var propTypes = {
  foo: PropTypes.string
};
exports.propTypes = propTypes;

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
