(function (module) {

module('mu.is.array', function () {
  'use strict';

  var isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };

  return isArray;
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
