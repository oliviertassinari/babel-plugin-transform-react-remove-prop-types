'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _class, _temp;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (babelHelpers.typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + babelHelpers.typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var SomeComponent = (_temp = _class = function (_React$Component) {
  _inherits(SomeComponent, _React$Component);

  function SomeComponent(props) {
    _classCallCheck(this, SomeComponent);

    var _this = _possibleConstructorReturn(this, (SomeComponent.__proto__ || Object.getPrototypeOf(SomeComponent)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(SomeComponent, [{
    key: 'render',
    value: function render() {
      var el;

      if (this.state.show) {
        el = _react2.default.createElement('div', null, null);
      }

      return el;
    }
  }]);

  return SomeComponent;
}(_react2.default.Component), _class.defaultProps = {
  prop: false
}, _temp);
exports.default = SomeComponent;