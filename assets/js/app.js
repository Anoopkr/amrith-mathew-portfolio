var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  	$routeProvider

  .when('/', {
    templateUrl : './assets/portfolio/portfolio.html',
    controller  : 'HomeController'
  })

  .when('/clientele', {
    templateUrl : './assets/clients/clientele.html',
    controller  : 'HomeController'
  })

  .when('/portfolio', {
    templateUrl : './assets/portfolio/portfolio.html',
    controller  : 'HomeController'
  })

  .when('/timeline', {
    templateUrl : './assets/timeline/timeline.html',
    controller  : 'HomeController'
  })

  .when('/projects', {
    templateUrl : './assets/projects/projects.html',
    controller  : 'HomeController'
  })

  .when('/career', {
    templateUrl : './assets/career/career.html',
    controller  : 'HomeController'
  })

  .otherwise({redirectTo: '/'});
});