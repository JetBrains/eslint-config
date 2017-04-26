module.exports = {
  "rules": {
    // ES6
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": [2, {"before": true, "after": true}],
    "constructor-super": 2,
    "generator-star-spacing": [2, {"before": false, "after": true}],
    "no-class-assign": 2,
    "no-confusing-arrow": [2, {"allowParens": true}],
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "object-shorthand": 2,
    "prefer-arrow-callback": [2, {"allowNamedFunctions": true}],
    "prefer-const": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2,
    "import/no-unresolved": 2,
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/no-absolute-path": 2,
    "import/export": 2,
    "import/no-mutable-exports": 2,
    "import/no-amd": 2,
    "import/no-commonjs": 2,
    "import/first": 2,
    "import/no-duplicates": 2,
    "import/extensions": [2, "always", {"js": "never"}],
    "import/order": [2, {"newlines-between": "always"}],
    "import/newline-after-import": 2,
    "import/no-named-default": 2
  },
  "env": {
    "es6": true
  },
  "plugins": [
    "import"
  ]
};
