// Datei: app.controller.js

angular.module('myApp')
  .controller('AppCtrl', AppController);

function AppController(
    // Locals
    $scope,
    $element,
    $attrs,
    // Services
    $http,
    $log,
    counterSvc
  ) {

  $log.log('AppCtrl angewendet');
  console.log('$element:', $element);
  console.log('Attribute:', $attrs);

  $scope.count = counterSvc.count;
  $scope.inc = function () {
    $scope.count = counterSvc.inc();
  }

  $scope.$watch(function () { return counterSvc.count},
    function (newValue, oldValue, scope) {
      $scope.count = newValue;
    }
  );

  $http.get('https://roe-matrix-poc.my-gateway.de/data/portcheck.json')
    .then(function (response) {
      $scope.anzahlRechner = response.data.length;
    })
}
