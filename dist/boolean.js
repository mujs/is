(function (module) {

module('mu.is.boolean', function () {
  'use strict';

  var isBoolean = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Boolean]';
  };

  return isBoolean;
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