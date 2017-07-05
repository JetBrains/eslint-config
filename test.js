module.exports = {
  "env": {
    "mocha": true
  },
  "plugins": [
    "bdd"
  ],
  "globals": {
    "expect": false,
    "sinon": false,
    "should": false
  },
  "rules": {
    "no-unused-expressions": 0,
    "bdd/focus": 2,
    "bdd/exclude": 0
  }
};
