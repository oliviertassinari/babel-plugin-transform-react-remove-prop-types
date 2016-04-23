# Babel Plugin for removing React propTypes
[![npm version](https://img.shields.io/npm/v/babel-plugin-transform-react-remove-prop-types.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types)
[![npm downloads](https://img.shields.io/npm/dm/babel-plugin-transform-react-remove-prop-types.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types)
[![Build Status](https://travis-ci.org/oliviertassinari/babel-plugin-transform-react-remove-prop-types.svg?branch=master)](https://travis-ci.org/oliviertassinari/babel-plugin-transform-react-remove-prop-types)

[![Dependencies](https://img.shields.io/david/oliviertassinari/babel-plugin-transform-react-remove-prop-types.svg?style=flat-square)](https://david-dm.org/oliviertassinari/babel-plugin-transform-react-remove-prop-types)
[![DevDependencies](https://img.shields.io/david/dev/oliviertassinari/babel-plugin-transform-react-remove-prop-types.svg?style=flat-square)](https://david-dm.org/oliviertassinari/babel-plugin-transform-react-remove-prop-types#info=devDependencies&view=list)

Remove unnecessary React `propTypes` from the production build.

## Example

**In**
```js
const Baz = () => (
  <div />
);

Baz.propTypes = {
  foo: React.PropTypes.string
};
```

**Out**
```js
const Baz = () => (
  <div />
);
```

## Installation

```sh
npm install --save-dev babel-plugin-transform-react-remove-prop-types
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
babel --plugins transform-react-remove-prop-types script.js
```

### Via Node API

```js
require("babel-core").transform("code", {
  plugins: ["transform-react-remove-prop-types"]
});
```

#License

MIT
