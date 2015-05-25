Babel React Plugin
==================

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
MIT
