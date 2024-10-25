const base = require('./base');
const style = require('./style');

module.exports = {
  rules: Object.assign({}, base.rules, style.rules)
};
