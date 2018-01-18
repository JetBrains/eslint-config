# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="4.0.1"></a>
# [4.0.1](https://github.com/JetBrains/eslint-config/compare/v3.0.2...v4.0.1) (2018-01-18)


### BREAKING CHANGES

* eslint@4.10.0 or higher is now a peer dependency
* Extract stylistic rules ([#1](https://github.com/JetBrains/eslint-config/pull/1https://github.com/JetBrains/eslint-config/pull/1))

#### Added rules:
* [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)
* [`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)
* [`react/button-has-type`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md)
* [`react/no-access-state-in-setstate`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md)
* [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md) was enabled again

#### Added options:
* `parens-new-line` in all contexts for [`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md#rule-details)


<a name="3.0.2"></a>
## [3.0.2](https://github.com/JetBrains/eslint-config/compare/v3.0.1...v3.0.2) (2017-11-05)



<a name="3.0.1"></a>
## [3.0.1](https://github.com/JetBrains/eslint-config/compare/v2.0.1...v3.0.1) (2017-09-21)



<a name="2.0.1"></a>
## [2.0.1](https://github.com/JetBrains/eslint-config/compare/v2.0.0...v2.0.1) (2017-09-21)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/JetBrains/eslint-config/compare/v1.1.0...v2.0.0) (2017-07-17)


* [Publish] feat: Update packages, add eslint peer dependency ([af45ea2](https://github.com/JetBrains/eslint-config/commit/af45ea2))


### BREAKING CHANGES

* eslint@4.2.0 or higher is now a peer dependency

Added rules:
 * [`react/no-find-dom-node`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md)
 * [`react/no-redundant-should-component-update`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md)
 * [`getter-return`](http://eslint.org/docs/rules/getter-return)
 * [`multiline-ternary`](http://eslint.org/docs/rules/multiline-ternary)
 * [`object-curly-newline`](http://eslint.org/docs/rules/object-curly-newline)
 * [`semi-style`](http://eslint.org/docs/rules/semi-style)
 * [`switch-colon-spacing`](http://eslint.org/docs/rules/switch-colon-spacing)

Added options:
 * `{"ignoreComments": true}` for [`no-trailing-spaces`](http://eslint.org/docs/rules/no-trailing-spaces)
 * `{"newlines-between": "always-and-inside-groups"}` for [`import/order`](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/order.md)

[`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md) is temporarily disabled until a [fix](https://github.com/yannickcr/eslint-plugin-react/pull/1292) gets published



<a name="1.1.0"></a>
# [1.1.0](https://github.com/JetBrains/eslint-config/compare/v1.0.1...v1.1.0) (2017-07-06)


### Features

* **test:** Discourage `expect(smth)` usage [Publish] ([b60180f](https://github.com/JetBrains/eslint-config/commit/b60180f))



<a name="1.0.1"></a>
## 1.0.1 (2017-07-05)
