// @flow weak

import path from 'path';
import fs from 'fs';
import assert from 'assert';
import {transformFileSync} from 'babel-core';
import babelPluginSyntaxJsx from 'babel-plugin-syntax-jsx';
import babelPluginTransformClassProperties from 'babel-plugin-transform-class-properties';
import babelPluginTransformReactRemovePropTypes from '../src/index';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

const modes = ['remove-es5', 'wrap-es5', 'remove-es6', 'wrap-es6'];

describe('fixtures', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');

  fs.readdirSync(fixturesDir).map((caseName) => {
    describe(`should work with ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);

      modes.map((mode) => {
        let expected;

        try {
          expected = fs.readFileSync(path.join(fixtureDir, `expected-${mode}.js`));
          expected = expected.toString();
        } catch (error) {
          return;
        }

        it(mode, () => {
          let babelConfig;

          if (mode === 'remove-es5') {
            babelConfig = {
              plugins: [
                [
                  babelPluginTransformReactRemovePropTypes,
                  {mode: 'remove'},
                ],
              ],
            };
          } else if (mode === 'wrap-es5') {
            babelConfig = {
              plugins: [
                [
                  babelPluginTransformReactRemovePropTypes,
                  {mode: 'wrap'},
                ],
              ],
            };
          } else if (mode === 'remove-es6') {
            babelConfig = {
              babelrc: false,
              plugins: [
                babelPluginSyntaxJsx,
                babelPluginTransformClassProperties,
                [
                  babelPluginTransformReactRemovePropTypes,
                  {mode: 'remove'},
                ],
              ],
            };
          } else if (mode === 'wrap-es6') {
            babelConfig = {
              babelrc: false,
              plugins: [
                babelPluginSyntaxJsx,
                babelPluginTransformClassProperties,
                [
                  babelPluginTransformReactRemovePropTypes,
                  {mode: 'wrap'},
                ],
              ],
            };
          }

          let actual = transformFileSync(path.join(fixtureDir, 'actual.js'), babelConfig).code;

          // fs.writeFileSync(path.join(fixtureDir, `expected-${mode}.js`), actual);

          actual = trim(actual);
          expected = trim(expected);
          assert.strictEqual(actual, expected);
        });
      });
    });
  });
});
