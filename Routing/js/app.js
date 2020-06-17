
angular.module('myApp', ['ngRoute'])
  .component('myDisplay', {
    template: '<h3>Works {{ answer }}</h3>',
    controller: function($scope) {
      $scope.answer = 42;
    }
  })
  .service('backendSvc', function ($http) {

    this.getData = function () {

      return $http.get('url').then(function (response) {
        return response.data;
      })
    }
  })
  .config(function ($routeProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        template: '<h2>Home</h2><h3>{{ msg }}</h3>',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'js/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/portcheck', {
        templateUrl: 'js/views/portcheck.html',
        data: {
          level: 17
        }
      })
      .when('/404', {
        template: '<h2>Ooops. Lost in space?</h2>'
      })
      .otherwise('/404');

  });

