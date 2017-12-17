"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = babelHelpers.interopRequireWildcard(require("react"));

var Greeting =
/*#__PURE__*/
function (_Component) {
  babelHelpers.inherits(Greeting, _Component);

  function Greeting(props, context) {
    var _this;

    babelHelpers.classCallCheck(this, Greeting);
    _this = babelHelpers.possibleConstructorReturn(this, (Greeting.__proto__ || Object.getPrototypeOf(Greeting)).call(this, props, context));
    var appName = context.store.getState().appName;
    _this.state = {
      appName: appName
    };
    return _this;
  }

  babelHelpers.createClass(Greeting, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("h1", null, "Welcome ", this.props.name, " and ", this.props.friends.join(', '), " to ", this.state.appName);
    }
  }]);
  return Greeting;
}(_react.Component);

exports.default = Greeting;
