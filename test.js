module.exports = {
  "rules": {
    "no-unused-expressions": 0,
    "bdd/focus": 2
  },
  "env": {
    "mocha": true
  },
  "globals": {
    "expect": false,
    "sinon": false,
    "should": false
  },
  "plugins": [
    "bdd"
  ]
};
