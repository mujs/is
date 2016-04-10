(function (module) {

module('mu.is.number', function () {
  'use strict';

  var isNumber = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Number]';
  };

  return isNumber;
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
