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

.when('/roles', {
    templateUrl : './assets/roles/roles.html',
    controller  : 'HomeController'
  })
.when('/contact', {
    templateUrl : './assets/contact/contact.html',
    controller  : 'HomeController'
  })
.when('/cv', {
    templateUrl : './assets/contact/contact.html',
    controller  : 'HomeController'
  })
  .otherwise({redirectTo: '/'});
});