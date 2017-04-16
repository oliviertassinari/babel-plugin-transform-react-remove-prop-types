'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
  var mapList = _ref.mapList;

  return (0, _map2.default)(mapList, function (index) {
    return _react2.default.createElement('div', null);
  });
};

Message.contextTypes = {
  mapList: _react.PropTypes.array.isRequired
};

Message.childContextTypes = {
  mapList: _react.PropTypes.array.isRequired
};

exports.default = Message;
