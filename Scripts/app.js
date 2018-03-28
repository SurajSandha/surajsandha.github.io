var app = angular.module('Suraj', ['ngMaterial', 'ngMessages', 'ngRoute']);

app.controller('MainController', function($scope, $route, $routeParams, $location) {

});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/Home', {
    templateUrl: 'Home.html',
    controller: 'MainController'
  })
  .when('/AboutMe', {
    templateUrl: 'AboutMe.html',
    controller: 'AboutMeController'
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});