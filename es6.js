const {error} = require('./consts');

module.exports = {
  env: {
    es6: true
  },
  plugins: [
    'import'
  ],
  rules: {
    // ES6
    'arrow-body-style': [error, 'as-needed'],
    'arrow-parens': [error, 'as-needed'],
    'arrow-spacing': [error, {before: true, after: true}],
    'constructor-super': error,
    'generator-star-spacing': [error, {before: false, after: true}],
    'lines-between-class-members': [error, 'always', {exceptAfterSingleLine: true}],
    'no-class-assign': error,
    'no-confusing-arrow': [error, {allowParens: true}],
    'no-const-assign': error,
    'no-constant-condition': error,
    'no-dupe-class-members': error,
    'no-this-before-super': error,
    'no-var': error,
    'object-shorthand': error,
    'prefer-arrow-callback': [error, {allowNamedFunctions: true}],
    'prefer-const': error,
    'prefer-spread': error,
    'prefer-template': error,
    'require-yield': error,
    'import/no-unresolved': error,
    'import/named': error,
    'import/namespace': error,
    'import/default': error,
    'import/no-absolute-path': error,
    'import/export': error,
    'import/no-mutable-exports': error,
    'import/no-amd': error,
    'import/no-commonjs': error,
    'import/first': error,
    'import/no-duplicates': error,
    'import/extensions': [error, 'always', {js: 'never'}],
    'import/order': [error, {'newlines-between': 'always-and-inside-groups'}],
    'import/newline-after-import': error,
    'import/no-named-default': error,
    'import/no-useless-path-segments': [error, {noUselessIndex: true}]
  }
};
