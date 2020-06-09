(function () {

  // Module Registrattion
  angular.module('myApp', []);

  // Module Getter for a previously registered module
  const myApp = angular.module('myApp');

  // Manual Bootstrap
  angular.bootstrap(document, ['myApp']);

  // jqLite-Query or jQuery-Function if provided, mostly useful while debugging on console
  var $elt = angular.element(document.body);

  // Re-enable debug infos (use at browser console)
  // See: https://docs.angularjs.org/api/ng/function/angular.reloadWithDebugInfo
  // angular.reloadWithDebugInfo(); 

  // Manually injecting and retreiving services
  // See: https://docs.angularjs.org/api/ng/function/angular.injector
  var injector = angular.injector(['ng','myApp']);

  // Limited but given functionality
  // See: https://docs.angularjs.org/api/ng/function/angular.errorHandlingConfig
  angular.errorHandlingConfig({ objectMaxDepth: 5, urlErrorParamsEnabled: true });
  // See: https://docs.angularjs.org/api/ng/function/angular.identity
  var firstArg = angular.identity(17);
  // See: https://docs.angularjs.org/api/ng/function/angular.noop
  angular.noop();

  // IE 8 Helper Methods
  
  // Replaced by fn.bind(): https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
  var addOne = angular.bind({ acc: 17 }, function(inc) { this.acc += inc; return this.acc; }, 1);
  console.log(addOne());

  // JS Helper

  // Superseeded by Object.assign()
  var dest = angular.extend({}, {a: 17, c: 2}, {a: 5, b: 20});
  console.log(dest);

  // Superseeded by JSON-API
  var destJSON = angular.toJson(dest);
  var destCopy = angular.fromJson(destJSON);

  // Superseeded by Array.prototype.forEach, for-of and for-in loop
  angular.forEach()

  // Deep Copy (Mostly internal)
  angular.copy()
  // Deep Equals
  angular.equals()

  // Type testing
  angular.isArray();
  angular.isDate();
  angular.isDefined();
  angular.isElement();
  angular.isFunction();
  angular.isNumber();
  angular.isObject();
  angular.isString();
  angular.isUndefined();

  // Deprecated
  // Deep angular.extend()
  dest = angular.merge({}, {a: 17, c: 2, deepObject: { d: 21 }}, {a: 5, b: 20});
  console.log(dest);
})();


