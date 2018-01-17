const {ignore} = require('./consts');

module.exports = {
  extends: [
    './index.js',
    './es6.js',
    './node.js'
  ],
  rules: {
    'import/no-commonjs': ignore
  }
};
