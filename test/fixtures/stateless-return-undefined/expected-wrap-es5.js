"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = babelHelpers.interopRequireWildcard(require("react"));

var Message = function Message(_ref) {
  var isFetching = _ref.isFetching,
      isSuccess = _ref.isSuccess,
      isFailure = _ref.isFailure,
      errorMsg = _ref.errorMsg;
  var messageType;
  var messageTxt;

  if (isFetching) {
    messageType = 'warning';
    messageTxt = 'Pending call...';
  } else if (isSuccess) {
    messageType = 'success';
    messageTxt = 'Repo pushed successfully';
  } else if (isFailure) {
    messageType = 'danger';
    messageTxt = 'Something wrong occured';
  }

  if (messageTxt === null) {
    return;
  }

  return _react.default.createElement("div", {
    className: 'alert alert-' + messageType,
    role: "alert"
  }, messageTxt);
};

Message.propTypes = process.env.NODE_ENV !== "production" ? {
  isFetching: _react.PropTypes.bool.isRequired,
  isSuccess: _react.PropTypes.bool.isRequired,
  isFailure: _react.PropTypes.bool.isRequired,
  errorMsg: _react.PropTypes.string.isRequired
} : {};
var _default = Message;
exports.default = _default;
