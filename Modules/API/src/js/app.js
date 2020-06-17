angular.module('myApp', [])

// Module wieder ziehen
var myApp = angular.module('myApp');

// Registering controllers
myApp.controller('NamedCtrl', function ControllerConstructor($scope){
  $scope.beispiel = "Ein Text wird länger";
});

// Registering filters
myApp.filter('filterName', function filterFactoryFunction(){
  return function (value) { return value.length; }
})

// Registering directives/components
myApp.directive('directiveName', function directiveFactoryFunction() {});
myApp.directive('sampleDir', function directiveFactoryFunction() {
  return {
    template: '<span>Das ist ein Beispiel</span>'
  }
});
myApp.component('componentName', { template: '<span>Das ist eine Komponente</span>' });

// Service patterns
myApp.service('service1Name', function ServiceConstructor(){});
myApp.factory('service2Name', function serviceFactoryFunction(){});
myApp.provider('service3Name', function providerFactoryFunction() { return { $get: function (){} }; });
myApp.value('service4Name', { serviceObject: 'Any Type'} );
myApp.constant('service5Name', { serviceObject: 'Any Type'});
myApp.decorator('service1Name', function patchService($delegate) {return $delegate});

// Initialisierung
myApp.config(function configureProviders() { /* and use constants */ });
myApp.run(function initializeModule() { /* can use any service */ });

// Divers
console.log(myApp.name);
console.log(myApp.requires);
