(function (module) {

module('mu.is.object', function () {
  'use strict';

  var isObject = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Object]';
  };

  return isObject;
});


})((function () {
  'use strict';

  // nodejs
  if (module && module.exports) {
    return function (name, definition) {
      module.exports = definition(require);
    };
  }

  // mujs/module
  if (typeof module === 'function') { return module; }

  throw 'unable to register module: unsupported environment';
})());
