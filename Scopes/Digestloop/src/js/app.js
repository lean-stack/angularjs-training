angular.module('myApp', [])
  .controller('DigestCtrl', function ($scope) {
    $scope.seconds = 0;

    setInterval(function() {
      ++$scope.seconds;
      console.log('Elapsed seconds', $scope.seconds);
    }, 1000);
  });
