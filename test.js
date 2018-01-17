const {ignore, error} = require('./consts');

module.exports = {
  env: {
    mocha: true
  },
  plugins: [
    'bdd'
  ],
  globals: {
    sinon: false,
    should: false
  },
  rules: {
    'no-unused-expressions': ignore,
    'bdd/focus': error,
    'bdd/exclude': ignore
  }
};
