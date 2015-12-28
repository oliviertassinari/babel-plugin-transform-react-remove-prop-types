# Babel Plugin for removing React propTypes
[![Build Status](https://travis-ci.org/oliviertassinari/babel-plugin-transform-react-remove-prop-types.svg?branch=master)](https://travis-ci.org/oliviertassinari/babel-plugin-transform-react-remove-prop-types)
[![npm version](https://img.shields.io/npm/v/babel-plugin-transform-react-remove-prop-types.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types)
[![npm downloads](https://img.shields.io/npm/dm/babel-plugin-transform-react-remove-prop-types.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types)

Remove unnecessary React `propTypes` from the production build.

## Example

**In**
```js
const Foo = React.createClass({
  propTypes: {
    foo: React.PropTypes.string
  }
});
```

**Out**
```js
const Foo = React.createClass({});
```

## Installation

```sh
$ npm install --save-dev babel-plugin-transform-react-remove-prop-types
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "env": {
    "production": {
      "plugins": ["transform-react-remove-prop-types"]
    }
  }
}
```

### Via CLI

```sh
$ babel --plugins transform-react-remove-prop-types script.js
```

### Via Node API

```js
require("babel-core").transform("code", {
  plugins: ["transform-react-remove-prop-types"]
});
```

#License

MIT
