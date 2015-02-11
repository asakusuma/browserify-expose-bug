# browserify-expose-bug

This example app demonstrates a browserify behavior where a required module hijacks the root module as the root entry for the produced bundle.

Run `node main.js` to build the bundle. You can execute `index.html` in the browser to see the result. The modules used to build the bundle are in `modules`.

### Expected Behavior
`./modules/root` is the root of the bundle. In other words `window.MyModule` === `./modules/root`.

### Actual Behavior
`./modules/my-foo` is the root of the bundle. In other words `window.MyModule` === `./modules/my-foo`.

This happens when you use `b.add` or `b.require` with the `expose` option to re-map the module id of `./modules/my-foo`.