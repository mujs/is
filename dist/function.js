(function (module) {

module('mu.is.function', function () {
  'use strict';

  var isFunction = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Function]';
  };

  return isFunction;
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
