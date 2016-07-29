# babel-plugin-transform-react-remove-prop-types

> Remove unnecessary React propTypes from the production build.

[![npm version](https://img.shields.io/npm/v/babel-plugin-transform-react-remove-prop-types.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types)
[![npm downloads](https://img.shields.io/npm/dm/babel-plugin-transform-react-remove-prop-types.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types)
[![Build Status](https://travis-ci.org/oliviertassinari/babel-plugin-transform-react-remove-prop-types.svg?branch=master)](https://travis-ci.org/oliviertassinari/babel-plugin-transform-react-remove-prop-types)

[![Dependencies](https://img.shields.io/david/oliviertassinari/babel-plugin-transform-react-remove-prop-types.svg?style=flat-square)](https://david-dm.org/oliviertassinari/babel-plugin-transform-react-remove-prop-types)
[![DevDependencies](https://img.shields.io/david/dev/oliviertassinari/babel-plugin-transform-react-remove-prop-types.svg?style=flat-square)](https://david-dm.org/oliviertassinari/babel-plugin-transform-react-remove-prop-types#info=devDependencies&view=list)

## Installation

```sh
npm install --save-dev babel-plugin-transform-react-remove-prop-types
```

## The problem solved

Remove unnecessary React `propTypes` from the production build.
You can **save bandwidth** by removing them.

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

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

without options:
```json
{
  "env": {
    "production": {
      "plugins": ["transform-react-remove-prop-types"]
    }
  }
}
```

with options:
```json
{
  "env": {
    "production": {
      "plugins": ["transform-react-remove-prop-types", {"mode": "wrap"}]
    }
  }
}
```

### Via CLI

```sh
babel --plugins transform-react-remove-prop-types script.js
```

### Via Node API

without options:
```js
require('babel-core').transform('code', {
  plugins: [
    'transform-react-remove-prop-types',
  ],
});
```

with options:
```js
require('babel-core').transform('code', {
  plugins: [
    [
      'transform-react-remove-prop-types',
      {mode: 'wrap'},
    ],
  ],
});
```

### Options

- `mode` two modes are available
 - `remove` (**default**):
the `propTypes` definitions are removed from the source code.
 - `wrap`:
the `propTypes` definitions are wrapped with the following code:
```js
if (process.env.NODE_ENV !== "production") {
  Foo.propTypes = {
    bar: React.PropTypes.string,
  };
}
```
This mode is quite useful for lib authors.
However, there is some limitation.
We do not support the old `React.createClass` syntax nor the
name less classes yet. In those cases, we keep the `propTypes`.

## License

MIT
