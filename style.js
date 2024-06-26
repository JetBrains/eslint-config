const {ignore, error, INDENT} = require('./consts');

module.exports = {
  rules: {
    /// Stylistic Issues
    'array-bracket-spacing': error,
    'block-spacing': error,
    'brace-style': [error, '1tbs'],
    camelcase: error,
    'comma-spacing': [error, {before: false, after: true}],
    'comma-style': [error, 'last'],
    'computed-property-spacing': error,
    'consistent-this': [error, 'this'],
    'eol-last': error,
    'func-names': error,
    'func-style': [error, 'declaration', {allowArrowFunctions: true}],
    'id-length': ignore,
    'id-match': error,
    indent: [error, INDENT, {SwitchCase: 1}],
    'jsx-quotes': [error, 'prefer-double'],
    'key-spacing': error,
    'keyword-spacing': error,
    'linebreak-style': error,
    'lines-around-comment': ignore,
    'max-len': [error, {
      ignoreComments: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      // Strings longer than 40 symbols (half of standard max-len)
      ignorePattern: '"(?=([^"]|"){40,}")|\'(?=([^\']|\'){40,}\')'
    }],
    'max-nested-callbacks': ignore, // useless, only function with name call
    // 'multiline-comment-style': [error, 'bare-block'],
    'multiline-ternary': [error, 'always-multiline'],
    'new-cap': error,
    'new-parens': error,
    'no-array-constructor': error,
    'no-continue': ignore,
    'no-inline-comments': ignore,
    'no-lonely-if': error,
    'no-mixed-spaces-and-tabs': error,
    'no-multiple-empty-lines': error,
    'no-negated-condition': ignore,
    'no-nested-ternary': error,
    'no-new-object': error,
    'no-restricted-syntax': error,
    'no-spaced-func': error,
    'no-ternary': ignore,
    'no-trailing-spaces': [error, {ignoreComments: true}],
    'no-underscore-dangle': ignore,
    'no-unneeded-ternary': error,
    'object-curly-newline': [error, {consistent: true}],
    'object-curly-spacing': error,
    'one-var': [error, 'never'],
    'operator-assignment': [error, 'always'],
    'operator-linebreak': error,
    'padded-blocks': ignore,
    'quote-props': [error, 'as-needed'],
    quotes: [error, 'single'],
    'semi-spacing': [error, {before: false, after: true}],
    semi: [error, 'always'],
    'semi-style': [error, 'last'],
    'sort-vars': ignore,
    'space-before-blocks': [error, 'always'],
    'space-before-function-paren': [error, {anonymous: 'always', named: 'never'}],
    'space-in-parens': [error, 'never'],
    'space-infix-ops': error,
    'space-unary-ops': [error, {words: true, nonwords: false}],
    'spaced-comment': ignore,
    'switch-colon-spacing': [error, {after: true, before: false}],
    'wrap-regex': ignore
  }
};
