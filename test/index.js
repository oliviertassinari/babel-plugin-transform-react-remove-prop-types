import path from 'path';
import fs from 'fs';
import assert from 'assert';
import {transformFileSync} from 'babel-core';
import reactPlugin from '../src/index';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('remove react propTypes', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map((caseName) => {
    it(`should work with ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      process.env.BABEL_ENV = 'production';
      const actual = transformFileSync(path.join(fixtureDir, 'actual.js'), {
        plugins: [
          reactPlugin,
        ],
      }).code;
      const expected = fs.readFileSync(path.join(fixtureDir, 'expected.js')).toString();

      assert.strictEqual(trim(actual), trim(expected));
    });
  });
});
