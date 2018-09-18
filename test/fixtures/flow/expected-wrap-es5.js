"use strict";

var Foo1 =
/*#__PURE__*/
function (_Component) {
  babelHelpers.inherits(Foo1, _Component);

  function Foo1() {
    babelHelpers.classCallCheck(this, Foo1);
    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Foo1).apply(this, arguments));
  }

  babelHelpers.createClass(Foo1, [{
    key: "render",
    value: function render() {}
  }]);
  return Foo1;
}(Component);

Foo1.propTypes = process.env.NODE_ENV !== "production" ? {
  bar1: require("prop-types").string
} : {};
var babelPluginFlowReactPropTypes_proptype_Props2 = {
  bar2: require("prop-types").string
};

var Foo2 =
/*#__PURE__*/
function (_Component2) {
  babelHelpers.inherits(Foo2, _Component2);

  function Foo2() {
    babelHelpers.classCallCheck(this, Foo2);
    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Foo2).apply(this, arguments));
  }

  babelHelpers.createClass(Foo2, [{
    key: "render",
    value: function render() {}
  }]);
  return Foo2;
}(Component);

Foo2.propTypes = process.env.NODE_ENV !== "production" ? {
  bar2: require("prop-types").string
} : {};

function Foo3(props) {
  return React.createElement("div", null);
}

Foo3.propTypes = process.env.NODE_ENV !== "production" ? {
  bar3: require("prop-types").string
} : {};
