var myApp = angular.module('myApp', []);

// Registering controllers
myApp.controller('NamedCtrl', function ControllerConstructor(){});

// Registering filters
myApp.filter('filterName', function filterFactoryFunction(){})

// Registering directives/components
myApp.directive('directiveName', function directiveFactoryFunction() {});
myApp.component('componentName', { options: 'several' });

// Service patterns
myApp.service('service1Name', function ServiceConstructor(){});
myApp.factory('service2Name', function serviceFactoryFunction(){});
myApp.provider('service3Name', function providerFactoryFunction() { return { $get: function (){} }; });
myApp.value('service4Name', { serviceObject: 'Any Type'} );
myApp.constant('service5Name', { serviceObject: 'Any Type'});
myApp.decorator('service1Name', function patchService($delegate) {return $delegate});

// Initialisierung
myApp.config(function ConfigureProviders() { /* and use constants */ });
myApp.run(function InitializeModule() { /* can use any service */ });

// Divers
console.log(myApp.name);
console.log(myApp.requires);
