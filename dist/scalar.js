(function (module) {

module('mu.is.scalar', function (require) {
  'use strict';

  var isString  = require('mu.is.string'),
      isNumber  = require('mu.is.number'),
      isBoolean = require('mu.is.boolean');

  var isScalar = function (arg) {
    return isString(arg) || isNumber(arg) || isBoolean(arg);
  };

  return isScalar;
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
