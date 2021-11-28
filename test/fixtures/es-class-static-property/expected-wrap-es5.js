"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Foo1 =
/*#__PURE__*/
function (_React$Component) {
  babelHelpers.inherits(Foo1, _React$Component);

  function Foo1() {
    babelHelpers.classCallCheck(this, Foo1);
    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Foo1).apply(this, arguments));
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
function (_React$Component2) {
  babelHelpers.inherits(Foo2, _React$Component2);

  function Foo2() {
    babelHelpers.classCallCheck(this, Foo2);
    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Foo2).apply(this, arguments));
  }

  babelHelpers.createClass(Foo2, [{
    key: "render",
    value: function render() {}
  }]);
  return Foo2;
}(React.Component);

exports.default = Foo2;
Foo2.propTypes = process.env.NODE_ENV !== "production" ? {
  bar2: PropTypes.string
} : {};

var componentFactory = function componentFactory() {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_React$Component3) {
    babelHelpers.inherits(Foo3, _React$Component3);

    function Foo3() {
      babelHelpers.classCallCheck(this, Foo3);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Foo3).apply(this, arguments));
    }

    babelHelpers.createClass(Foo3, [{
      key: "render",
      value: function render() {}
    }]);
    return Foo3;
  }(React.Component), Foo3.propTypes = process.env.NODE_ENV !== "production" ? {
    bar3: PropTypes.string
  } : {}, _temp;
};
