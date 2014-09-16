define('mu.is', function () {
  'use strict';
  
  var isDefined = function (arg) {
    return typeof arg !== 'undefined';
  };
  
  var isString = function (arg) {
    return typeof arg === 'string';
  };
  
  var isNumber = function (arg) {
    return typeof arg === 'number';
  };
  
  var isArrayLike = function (arg) {
    return arg && isNumber(arg.length);
  };
  
  return {
    defined: isDefined,
    string: isString,
    number: isNumber,
    array: isArrayLike
  };
});
