const { ignore, error } = require("./consts");

module.exports = {
  rules: {
    /// Stylistic Issues
    camelcase: error,
    "consistent-this": [error, "this"],
    "func-names": error,
    "func-style": [error, "declaration", { allowArrowFunctions: true }],
    "id-length": ignore,
    "id-match": error,
    "max-nested-callbacks": ignore, // useless, only function with name call
    // 'multiline-comment-style': [error, 'bare-block'],
    "new-cap": error,
    "no-array-constructor": error,
    "no-continue": ignore,
    "no-inline-comments": ignore,
    "no-lonely-if": error,
    "no-negated-condition": ignore,
    "no-nested-ternary": error,
    "no-new-object": error,
    "no-restricted-syntax": error,
    "no-spaced-func": error,
    "no-ternary": ignore,
    "no-underscore-dangle": ignore,
    "no-unneeded-ternary": error,
    "one-var": [error, "never"],
    "operator-assignment": [error, "always"],
    "sort-vars": ignore,
  },
};
