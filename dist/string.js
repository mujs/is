(function (module) {

module('mu.is.string', function () {
  'use strict';

  var isString = function (arg) {
    return Object.prototype.toString.call(arg) === '[object String]';
  };

  return isString;
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
