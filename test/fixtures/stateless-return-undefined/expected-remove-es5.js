"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

var _default = Message;
exports.default = _default;