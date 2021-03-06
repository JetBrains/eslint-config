const {ignore, error, INDENT} = require('./consts');

module.exports = {
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y'
  ],
  extends: [
    'plugin:jsx-a11y/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/button-has-type': [error, {submit: false, reset: false}],
    'react/display-name': error,
    'react/forbid-prop-types': ignore,
    'react/jsx-boolean-value': [error, 'never'],
    'react/jsx-closing-bracket-location': [error, 'tag-aligned'],
    'react/jsx-curly-spacing': [error, {when: 'never', children: true}],
    'react/jsx-equals-spacing': [error, 'never'],
    'react/jsx-first-prop-new-line': error,
    'react/jsx-indent': [error, INDENT],
    'react/jsx-indent-props': [error, INDENT],
    'react/jsx-key': error,
    'react/jsx-max-props-per-line': [error, {maximum: 1, when: 'multiline'}],
    'react/jsx-no-comment-textnodes': error,
    'react/jsx-no-duplicate-props': error,
    'react/jsx-no-literals': error,
    'react/jsx-no-target-blank': error,
    'react/jsx-no-undef': error,
    'react/jsx-no-useless-fragment': error,
    'react/jsx-pascal-case': error,
    'react/jsx-sort-props': ignore,
    'react/jsx-tag-spacing': [error, {beforeSelfClosing: 'never'}],
    'react/jsx-uses-react': error,
    'react/jsx-uses-vars': error,
    'react/jsx-wrap-multilines': [error, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/no-access-state-in-setstate': error,
    'react/no-array-index-key': error,
    'react/no-children-prop': error,
    'react/no-danger': ignore,
    'react/no-danger-with-children': error,
    'react/no-deprecated': error,
    'react/no-did-mount-set-state': error,
    'react/no-did-update-set-state': error,
    'react/no-direct-mutation-state': error,
    'react/no-find-dom-node': error,
    'react/no-multi-comp': [error, {ignoreStateless: true}],
    'react/no-redundant-should-component-update': error,
    'react/no-render-return-value': error,
    'react/no-set-state': ignore,
    'react/no-string-refs': error,
    'react/no-this-in-sfc': error,
    'react/no-typos': error,
    'react/no-unescaped-entities': error,
    'react/no-unknown-property': error,
    'react/prefer-es6-class': error,
    'react/prop-types': error,
    'react/react-in-jsx-scope': error,
    'react/require-render-return': error,
    'react/self-closing-comp': error,
    'react/sort-comp': error,
    'react/style-prop-object': error,
    'react/void-dom-elements-no-children': error,

    'react-hooks/rules-of-hooks': error,
    'react-hooks/exhaustive-deps': error,

    'jsx-a11y/no-autofocus': ignore
  }
};
