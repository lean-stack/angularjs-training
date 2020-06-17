(function(){

angular.module('myApp')
  .controller('ChildCtrl', ChildController);

function ChildController($scope) {

  // ????? Woher kommt hier $scope.topic ????
  $scope.topic = 'Thema: ' + $scope.topic;
  $scope.votes = 0;

  $scope.voteFor = function () { ++$scope.votes; }
}

/*
function ChildController($scope) {
  var vm = this;

  // ????? Woher kommt hier $scope.topic ????
  vm.topic = 'Thema: ' + $scope.topic;
  vm.votes = 0;

  vm.voteFor = function () { ++vm.votes; }
}

*/
})();

