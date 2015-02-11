# browserify-expose-bug

This example app demonstrates a browserify behavior where a required module hijacks the root module as the root entry for the produced bundle.

Run `node main.js` to build the bundle. You can execute `index.html` in the browser to see the result. The modules used to build the bundle are in `modules`.