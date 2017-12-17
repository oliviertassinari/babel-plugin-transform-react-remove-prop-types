"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = babelHelpers.interopRequireWildcard(require("react"));

var _map = babelHelpers.interopRequireDefault(require("lodash/map"));

var Message = function Message(_ref) {
  var mapList = _ref.mapList;
  return (0, _map.default)(mapList, function (index) {
    return _react.default.createElement("div", null);
  });
};

Message.propTypes = process.env.NODE_ENV !== "production" ? {
  mapList: _react.PropTypes.array.isRequired
} : {};
var _default = Message;
exports.default = _default;
