var browserify = require('browserify');
var fs = require('fs');

var b = browserify({
  standalone: 'MyModule',
  entries: './modules/root'
});

b.require('./modules/foo', {
  expose: 'my-foo'
});

b.require('./modules/bar', {
  expose: 'my-bar'
});


b.bundle().pipe(fs.createWriteStream('bundle.js'));