(function () {

  // Module Getter
  angular.module('myApp')
    // Controller Registration
    .controller('DemoCtrl', DemoController);

  // Controller Definition, Constructor Function
  function DemoController(/* AngularJS created Template Scope */ $scope) {

    // Values for the Scope
    $scope.primitiveValue = 17;
    $scope.arrayValue = [2,3,5,7,11,13,17,19,23,29];
    $scope.objectValue = { firstname: 'Klaus', lastname: 'Kinski' };

    // Getters / Calculating Functions
    $scope.countOfPrimes = function (max) {
      return $scope.arrayValue.filter(
        function (v) { return v < max; }
      ).length;
    };
    $scope.fullname = function() { return $scope.objectValue.firstname + " " + $scope.objectValue.lastname; };

    // Event Handlers
    $scope.incPrimitiveValue = function() {
      $scope.primitiveValue = $scope.primitiveValue + 1;
    }

  }


  // Not best practice, but working
  angular.module('myApp')
    .controller('SampleCtrl', function ($scope) { $scope.answer = 42 });
})();
