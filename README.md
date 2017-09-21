# JetBrains config for ESLint

[![official JetBrains project](http://jb.gg/badges/official-flat-square.svg)](https://confluence.jetbrains.com/display/ALL/JetBrains+on+GitHub)

## Package contents

`@jetbrains` basic rules<br />
`@jetbrains/eslint-config/browser` browser rules and environment<br />
`@jetbrains/eslint-config/es6` ES6 rules and environment, including [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)<br /> 
`@jetbrains/eslint-config/node` Node.js rules and environment<br />
`@jetbrains/eslint-config/react` rules for [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)<br /> 
`@jetbrains/eslint-config/angular`  rules for [eslint-plugin-angular](https://github.com/Gillespie59/eslint-plugin-angular)<br /> 
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

**Note to maintainers**: to trigger publishing of the npm package append *\[Publish\]* to the commit message. For example:

*Tweaked the rules \[Publish\]*
