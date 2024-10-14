const {ignore, error} = require('./consts');

module.exports = {
  env: {
    mocha: true
  },
  plugins: [
    '@vitest'
  ],
  globals: {
    sinon: false,
    should: false
  },
  rules: {
    'no-unused-expressions': ignore,
    '@vitest/no-focused-tests': error,
    '@vitest/no-disabled-tests': ignore
  }
};
