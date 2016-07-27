// @flow weak

import minimist from 'minimist';
import Mocha from 'mocha';
import glob from 'glob';

const argv = minimist(process.argv.slice(2), {
  alias: {
    m: 'module',
    g: 'grep',
  },
});

const globPatterns = [
  `test/**/${argv.module ? argv.module : '*'}.spec.js`,
];

const mocha = new Mocha({
  grep: argv.grep ? argv.grep : undefined,
});

glob(
  globPatterns.length > 1 ? `{${globPatterns.join(',')}}` : globPatterns[0],
  {},
  (err, files) => {
    files.forEach((file) => mocha.addFile(file));
    mocha.run((failures) => {
      process.on('exit', () => {
        process.exit(failures); // eslint-disable-line no-process-exit
      });
    });
  }
);
