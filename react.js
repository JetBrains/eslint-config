module.exports = {
  "rules": {
    "react/display-name": 2,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-closing-bracket-location": [2, "tag-aligned"],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-first-prop-new-line": 2,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [2, { "maximum": 1 }],
    "react/jsx-no-bind": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 2,
    "react/jsx-no-target-blank": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-tag-spacing": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-wrap-multilines": 2,
    "react/no-array-index-key": 2,
    "react/no-danger": 0,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    "react/no-set-state": 0,
    "react/no-string-refs": 2,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-render-return": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/style-prop-object": 2,

    // don't turn on unless https://github.com/yannickcr/eslint-plugin-react/issues/1101 is resolved
    "react/void-dom-elements-no-children": 0
  },
  "plugins": [
    "react"
  ]
};
