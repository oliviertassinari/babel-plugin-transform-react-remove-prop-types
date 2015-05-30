Babel React Plugin
==================
[![Circle CI](https://circleci.com/gh/nkt/babel-plugin-react.svg?style=svg)](https://circleci.com/gh/nkt/babel-plugin-react)
[![Downloads](https://img.shields.io/npm/dm/babel-plugin-react.svg)](https://www.npmjs.com/package/babel-plugin-react)

Transformers
------------

### Removing `propTypes`

Name: `minification.removeReactPropTypes`

Before:
```js
const Foo = React.createClass({
  propTypes: {
    foo: React.PropTypes.string
  }
});
```
After:
```js
const Foo = React.createClass({});
```

License
-------
[![MIT license](https://img.shields.io/npm/l/babel-plugin-react.svg)](LICENSE)
