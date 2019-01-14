var _react2 = require('react');
var PropTypes = require('prop-types');

// react >= 15.6
var Class1 = _react2.default.createClass({
  displayName: 'Class1',
  propTypes: {
    foo: PropTypes.string,
  },
});

// react < 15.6
var Class2 = _react2.default.createClass({
  displayName: 'Class2',
  propTypes: {
      foo: _react2.default.PropTypes.string,
  },
});
