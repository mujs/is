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
  
  var isObject = function (arg) {
    return {}.toString.call(arg) === '[object Object]';
  };
  
  var isFunction = function (arg) {
    return typeof arg === 'function';
  };
  
  return {
    defined: isDefined,
    string: isString,
    number: isNumber,
    array: isArrayLike,
    object: isObject,
    function: isFunction
  };
});
