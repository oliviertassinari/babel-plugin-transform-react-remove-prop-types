"use strict";

var _base = babelHelpers.interopRequireDefault(require("components/base"));

var Foo =
/*#__PURE__*/
function (_BaseComponent) {
  babelHelpers.inherits(Foo, _BaseComponent);

  function Foo() {
    babelHelpers.classCallCheck(this, Foo);
    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Foo).apply(this, arguments));
  }

  babelHelpers.createClass(Foo, [{
    key: "render",
    value: function render() {}
  }]);
  return Foo;
}(_base.default);

Foo.propTypes = {
  bar: PropTypes.string
};
