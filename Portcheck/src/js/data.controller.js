// --------------------
// Datei: data.controller.js

angular.module('portcheck')
  .controller('DataCtrl', DataController);

function DataController($scope, $http, $interval, $timeout) {

  $scope.seconds = 0;

  /*
  setInterval(function () {
    $scope.$apply(function () {
      $scope.seconds = $scope.seconds + 1;
    });
    // $scope.$digest();
  }, 1000);
  */

  $scope.message = '';
  var lastTimestamp = '';

  $interval(function () {
    $http.get('https://roe-matrix-poc.my-gateway.de/data/portcheck.json').then(
      function (result) {
        var newTimestamp = result.data[0].Date.value;
        if (newTimestamp != lastTimestamp) {
          $scope.data = result.data;
          lastTimestamp = newTimestamp;
          $scope.message = 'Neue Daten geladen.';
          $timeout(function () {$scope.message = '';}, 5000);
        } else {
          $scope.message = 'Keine neuen Daten vorhanden.';
          $timeout(function () {$scope.message = '';}, 5000);
        }
      },
      function (error) {
        $scope.error = error.statusText;
       }
    );
  },30000);

  $http.get('https://roe-matrix-poc.my-gateway.de/data/portcheck.json').then(
    function (result) {
      $scope.data = result.data;
      lastTimestamp = $scope.data[0].Date.value;
    },
    function (error) {
      $scope.error = error.statusText;
     }
  );


}
