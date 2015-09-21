define('mu.is.defined', function () {
  'use strict';

  var isDefined = function (arg) {
    return typeof arg !== 'undefined';
  };

  return isDefined;
});

define('mu.is.boolean', function () {
  'use strict';

  var isBoolean = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Boolean]';
  };

  return isBoolean;
});

define('mu.is.string', function () {
  'use strict';

  var isString = function (arg) {
    return Object.prototype.toString.call(arg) === '[object String]';
  };

  return isString;
});

define('mu.is.number', function () {
  'use strict';

  var isNumber = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Number]';
  };

  return isNumber;
});

define('mu.is.array', function (require) {
  'use strict';

  var isNumber = require('mu.is.number');

  var isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };

  return isArray;
});

define('mu.is.object', function () {
  'use strict';

  var isObject = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Object]';
  };

  return isObject;
});

define('mu.is.function', function () {
  'use strict';

  var isFunction = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Function]';
  };

  return isFunction;
});

define('mu.is.scalar', function (require) {
  'use strict';

  var isString  = require('mu.is.string'),
      isNumber  = require('mu.is.number'),
      isBoolean = require('mu.is.boolean');

  var isScalar = function (arg) {
    return isString(arg) || isNumber(arg) || isBoolean(arg);
  };

  return isScalar;
});
