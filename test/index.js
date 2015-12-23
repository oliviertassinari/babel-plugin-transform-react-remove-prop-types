const path = require('path');
const fs = require('fs');
const assert = require('assert');
const babel = require('babel-core');
const reactPlugin = require('../src/index');

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('remove react propTypes', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map((caseName) => {
    it(`should ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const actual = babel.transformFileSync(path.join(fixtureDir, 'actual.js'), {
        stage: 0,
        plugins: [
          reactPlugin
        ]
      }).code;
      const expected = fs.readFileSync(path.join(fixtureDir, 'expected.js')).toString();

      assert.equal(trim(actual), trim(expected));
    });
  });
});
