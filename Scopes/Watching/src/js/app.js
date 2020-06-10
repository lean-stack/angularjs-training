angular.module('myApp', [])
  .controller('WatchingCtrl', function ($scope) {
    $scope.firstname = '';
    $scope.msg1 = '';

    $scope.$watch('firstname', function (newValue, oldValue, scope) {
      if (oldValue.trim().length === 0 || newValue.trim().length === 0) {
        $scope.msg1 = '';
      } else {
        $scope.msg1 = 'Also doch nicht ' + oldValue + '?';
      }
    })

    $scope.$watch(function (scope) { return scope.firstname.length }, function() {
      console.log('Länge hat sich geändert');
    });
  });
