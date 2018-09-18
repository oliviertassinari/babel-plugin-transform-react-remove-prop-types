"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = babelHelpers.interopRequireDefault(require("react"));

var _propTypes = babelHelpers.interopRequireDefault(require("prop-types"));

var _Parent = babelHelpers.interopRequireDefault(require("./Parent"));

var Foo =
/*#__PURE__*/
function (_ParentComponent) {
  babelHelpers.inherits(Foo, _ParentComponent);

  function Foo() {
    babelHelpers.classCallCheck(this, Foo);
    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Foo).apply(this, arguments));
  }

  babelHelpers.createClass(Foo, [{
    key: "render",
    value: function render() {}
  }]);
  return Foo;
}(_Parent.default);

exports.default = Foo;
