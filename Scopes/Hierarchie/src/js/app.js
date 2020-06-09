angular.module('myApp', [])
    .controller('OuterCtrl', function($scope) {
        $scope.title = 'Programming Languages';
        $scope.languages = ['JavaScript', 'PHP', 'C#'];
    })
    .controller('InnerCtrl', function($scope) {
        $scope.title = 'CS ' + $scope.title;
    })
    .controller('ItemCtrl', function($scope) {})
;
