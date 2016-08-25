'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
  var isFetching = _ref.isFetching;
  var isSuccess = _ref.isSuccess;
  var isFailure = _ref.isFailure;
  var errorMsg = _ref.errorMsg;

  var messageType = void 0;
  var messageTxt = void 0;
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

  return _react2.default.createElement(
    'div',
    { className: 'alert alert-' + messageType, role: 'alert' },
    messageTxt
  );
};

process.env.NODE_ENV !== "production" ? Message.propTypes = {
  isFetching: _react.PropTypes.bool.isRequired,
  isSuccess: _react.PropTypes.bool.isRequired,
  isFailure: _react.PropTypes.bool.isRequired,
  errorMsg: _react.PropTypes.string.isRequired
} : void 0;

exports.default = Message;