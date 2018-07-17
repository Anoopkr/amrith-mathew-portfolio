var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : './assets/clients/clientele.html',
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

  .otherwise({redirectTo: '/'});
});