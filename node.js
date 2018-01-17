const {ignore, error} = require('./consts');

module.exports = {
  env: {
    node: true
  },
  rules: {
    // Possible Errors
    'no-console': ignore,
    // Node.js and CommonJS
    'callback-return': ignore,
    'global-require': ignore,
    'handle-callback-err': error,
    'no-mixed-requires': error,
    'no-new-require': error,
    'no-path-concat': error,
    'no-process-exit': error,
    'no-restricted-modules': ignore,
    'no-sync': ignore
  }
};
