
angular.module('myApp')
 .controller('PortcheckCtrl', function ($scope, $http, $route, $rootScope, $interval) {
   $scope.msg = 'Aktuelle Port Daten';
   $scope.level = $route.current.data.level;
 });
