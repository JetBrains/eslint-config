# JetBrains config for ESLint

[![official JetBrains project](http://jb.gg/badges/official-flat-square.svg)](https://confluence.jetbrains.com/display/ALL/JetBrains+on+GitHub)

## Package contents

`@jetbrains` basic and style rules<br />
`@jetbrains/eslint-config/base` basic rules<br />
`@jetbrains/eslint-config/style` style rules<br />
`@jetbrains/eslint-config/browser` browser rules and environment<br />
`@jetbrains/eslint-config/es6` ES6 rules and environment, including [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)<br /> 
`@jetbrains/eslint-config/node` Node.js rules and environment<br />
`@jetbrains/eslint-config/react` rules for [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react), [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks), and [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)<br /> 
`@jetbrains/eslint-config/angular` rules for [eslint-plugin-angular](https://github.com/Gillespie59/eslint-plugin-angular)<br /> 
`@jetbrains/eslint-config/test` mocha, chai, sinon rules and environment, including [eslint-plugin-bdd](https://github.com/Nate-Wilkins/eslint-plugin-bdd)<br /> 

## Usage example

```json
{
  "parser": "babel-eslint",
  "extends": [
    "@jetbrains",
    "@jetbrains/eslint-config/browser",
    "@jetbrains/eslint-config/es6",
    "@jetbrains/eslint-config/node",
    "@jetbrains/eslint-config/react",
    "@jetbrains/eslint-config/angular",
    "@jetbrains/eslint-config/test"
  ]
}
```

## Usage with Prettier

If you're using this ESLint config with [Prettier](https://prettier.io), make  sure that you disable 
the `arrow-body-style` rule in the ESLint config, because it conflicts with Prettier rules:

```json
"rules": {
  "arrow-body-style": "off"
}
``` 

**Note to maintainers**: to trigger publishing of the npm package append *\[Publish\]* to the commit message. For example:

*Tweaked the rules \[Publish\]*
