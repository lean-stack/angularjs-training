angular.module('myApp', [])
    .controller('OuterCtrl', function($scope) {
        $scope.title = 'Programming Languages';
        $scope.languages = ['JavaScript', 'PHP', 'C#'];
    })
    .controller('InnerCtrl', function($scope) {
        $scope.title = 'CS ' + $scope.title;
    })
    .controller('ItemCtrl', function($scope) {
      // $scope.l wurde definitiert über ng-repeat im index.html
      console.log('ItemCtrl für Sprache l:', $scope.l)
    })
;
