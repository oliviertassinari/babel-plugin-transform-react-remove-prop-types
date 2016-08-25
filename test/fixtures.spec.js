// @flow weak

import path from 'path';
import fs from 'fs';
import assert from 'assert';
import {transformFileSync} from 'babel-core';
import reactPlugin from '../src/index';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

const modes = ['remove', 'wrap'];

describe('fixtures', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');

  modes.map((mode) => {
    describe(mode, () => {
      fs.readdirSync(fixturesDir).map((caseName) => {
        it(`should work with ${caseName.split('-').join(' ')}`, () => {
          const fixtureDir = path.join(fixturesDir, caseName);

          let actual = transformFileSync(path.join(fixtureDir, 'actual.js'), {
            plugins: [
              [
                reactPlugin,
                {mode: mode},
              ],
            ],
          }).code;

          // fs.writeFileSync(path.join(fixtureDir, `expected-${mode}.js`), actual);

          actual = trim(actual);

          let expected = fs.readFileSync(path.join(fixtureDir, `expected-${mode}.js`));
          expected = expected.toString();
          expected = trim(expected);

          assert.strictEqual(actual, expected);
        });
      });
    });
  });
});
