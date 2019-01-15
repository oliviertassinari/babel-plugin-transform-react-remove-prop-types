var { createClass } = require('./notReact')
var PropTypes = require('prop-types')

var Class1 = createClass({
  displayName: 'Class1',
  propTypes: {
    foo: PropTypes.string,
  },
})
