# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [6.0.4](https://github.com/JetBrains/eslint-config/compare/v6.0.3...v6.0.4) (2024-10-25)

### [6.0.3](https://github.com/JetBrains/eslint-config/compare/v6.0.2...v6.0.3) (2024-10-24)

### [6.0.2](https://github.com/JetBrains/eslint-config/compare/v6.0.1...v6.0.2) (2024-10-23)


### Bug Fixes

* **react:** bring INDENT constant back ([b2899a4](https://github.com/JetBrains/eslint-config/commit/b2899a4808119b1f67bba4b4d27369bc63843f78))

### [6.0.1](https://github.com/JetBrains/eslint-config/compare/v6.0.0...v6.0.1) (2024-10-23)


### Bug Fixes

* **[publish]:** remove deprecated formatting rules ([2436767](https://github.com/JetBrains/eslint-config/commit/243676792ac3ebe1302297853646cf1fe4504528))

## [6.0.0](https://github.com/JetBrains/eslint-config/compare/v5.4.2...v6.0.0) (2024-10-14)


### ⚠ BREAKING CHANGES

* **test:** you need to update your dependencies if you're using @jetbrains/eslint-config/test

### Features

* **test:** replace eslint-plugin-bdd peer dependency with @vitest/eslint-plugin to support Eslint 9 ([676e431](https://github.com/JetBrains/eslint-config/commit/676e4315a8df719deb5f3c9add160de78ffff205))

### [5.4.2](https://github.com/JetBrains/eslint-config/compare/v5.4.1...v5.4.2) (2024-04-11)


### Bug Fixes

* **[publish]:** remove deprecated rules ([b69dc96](https://github.com/JetBrains/eslint-config/commit/b69dc96ba4381f6ad69281206f4ca2bb9a214466))

### [5.4.1](https://github.com/JetBrains/eslint-config/compare/v5.3.2...v5.4.1) (2022-05-31)

### [5.3.2](https://github.com/JetBrains/eslint-config/compare/v5.3.1...v5.3.2) (2022-02-21)

### [5.3.1](https://github.com/JetBrains/eslint-config/compare/v5.3.0...v5.3.1) (2019-11-13)

## [5.3.0](https://github.com/JetBrains/eslint-config/compare/v5.2.1...v5.3.0) (2019-11-12)


### Features

* **react [publish]:** add react-hooks plugin ([f0be1ce](https://github.com/JetBrains/eslint-config/commit/f0be1ce4dfb6d471459ac03797c9b1a9839c6e64))

### [5.2.1](https://github.com/JetBrains/eslint-config/compare/v5.2.0...v5.2.1) (2019-11-11)


### Bug Fixes

* **react [publish]:** specify version: detect to supress warning ([36ad62d](https://github.com/JetBrains/eslint-config/commit/36ad62d064506f67d90561eb1d8465ab8863b100))

## [5.2.0](https://github.com/JetBrains/eslint-config/compare/v5.1.0...v5.2.0) (2019-11-11)


### Features

* **import:** add rules ([2da498b](https://github.com/JetBrains/eslint-config/commit/2da498bb695f1e66418e1e6c1436658108988d64))
* **react:** add eslint-plugin-jsx-a11y ([a9b9daf](https://github.com/JetBrains/eslint-config/commit/a9b9daf2ea3115b12531ca0ed36b8430095cf4a6))
* **react [publish]:** add more rules ([9bf53cd](https://github.com/JetBrains/eslint-config/commit/9bf53cdb9eb68e3fb7044c5c512f8657bfb02331))

## [5.1.0](https://github.com/JetBrains/eslint-config/compare/v5.0.0...v5.1.0) (2019-11-11)


### Features

* **react [publish]:** remove jsx-no-bind ([0f12ec7](https://github.com/JetBrains/eslint-config/commit/0f12ec7b6c5c79c137458bc21fb1288e97b364a9))


### Bug Fixes

* **base:** don't report rest siblings as unused variables ([b5689b0](https://github.com/JetBrains/eslint-config/commit/b5689b0cf64482da2c895f7bce4b88aab651f0e5))

## [5.0.0](https://github.com/JetBrains/eslint-config/compare/v4.0.6...v5.0.0) (2019-08-09)


### Build System

* **package.json:** moved eslint dependencies to peer- and devDependencies ([b41828c](https://github.com/JetBrains/eslint-config/commit/b41828c))


### BREAKING CHANGES

* **package.json:** eslint-plugin-* are now peerDependencies



### [4.0.6](https://github.com/JetBrains/eslint-config/compare/v4.0.5...v4.0.6) (2019-07-08)



## [4.0.5](https://github.com/JetBrains/eslint-config/compare/v4.0.4...v4.0.5) (2019-02-21)



<a name="4.0.3"></a>
## [4.0.3](https://github.com/JetBrains/eslint-config/compare/v4.0.2...v4.0.3) (2018-08-10)



<a name="4.0.2"></a>
## [4.0.2](https://github.com/JetBrains/eslint-config/compare/v4.0.1...v4.0.2) (2018-03-08)



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
