(function(){

angular.module('myApp')
  .controller('ChildCtrl', ChildController);

function ChildController($scope) {
  var vm = this;

  vm.topic = 'Thema: ' + $scope.topic;
  vm.votes = 0;

  vm.voteFor = function () { ++vm.votes; }
}

})();

