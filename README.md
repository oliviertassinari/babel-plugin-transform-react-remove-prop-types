# Babel Plugin for removing React propTypes
[![Circle CI](https://circleci.com/gh/nkt/babel-plugin-react-remove-prop-types.svg?style=svg)](https://circleci.com/gh/nkt/babel-plugin-react-remove-prop-types)
[![Downloads](https://img.shields.io/npm/dm/babel-plugin-react-remove-prop-types.svg)](https://www.npmjs.com/package/babel-plugin-react-remove-prop-types)

Removes `propTypes` from your React components.

## Example

**In**
```javascript
const Foo = React.createClass({
  propTypes: {
    foo: React.PropTypes.string
  }
});
```

**Out**
```javascript
const Foo = React.createClass({});
```

## Installation

```sh
$ npm install --save-dev babel-plugin-react-remove-prop-types
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "env": {
    "production": {
      "plugins": ["react-remove-prop-types"]
    }
  }
}
```

### Via CLI

```sh
$ babel --plugins react-remove-prop-types script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["react-remove-prop-types"]
});
```

License
-------
[![MIT license](https://img.shields.io/npm/l/babel-plugin-react-remove-prop-types.svg)](LICENSE)
