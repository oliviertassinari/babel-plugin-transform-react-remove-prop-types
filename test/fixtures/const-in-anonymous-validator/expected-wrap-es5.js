"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = babelHelpers.interopRequireWildcard(require("react"));

var Component = function Component() {
  return _react.default.createElement("div", null);
};

var referencedPropTypes = process.env.NODE_ENV !== "production" ? {
  variant3: function variant3() {
    var willBeWrapped = 1;
    return null;
  }
} : {};
Component.propTypes = process.env.NODE_ENV !== "production" ? babelHelpers.objectSpread({
  variant1: function variant1(props) {
    var variants = [null];
    return variantſ[0];
  },
  variant2: chainPropTypes(_react.PropTypes.oneOf(['foo']), function (props) {
    var deprecatedVariants = ['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading'];
    return null;
  })
}, referencedPropTypes) : {};
var _default = Component;
exports.default = _default;
