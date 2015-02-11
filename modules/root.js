var foo = require('my-foo');
var bar = require('my-bar');

module.exports = {
  name: 'root',
  children: {
    foo: foo,
    bar: bar
  }
};