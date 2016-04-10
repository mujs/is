(function (module) {

module('mu.is.defined', function () {
  'use strict';

  var isDefined = function (arg) {
    return typeof arg !== 'undefined';
  };

  return isDefined;
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
