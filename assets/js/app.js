var app = angular.module('myApp', ['ngRoute'])
  	.constant('AppConstant', {      	
      	navItems: ['portfolio', 'clientele', 'projects', 'career', 'roles', 'timeline', 'throwback', 'cv', 'contact'],
      })
     .run(run);


      run.$inject = ['$rootScope', 'AppConstant'];

      	function run($rootScope, appConst) {
	      	$rootScope.navItems = appConst.navItems;
	       
	        $rootScope.$on('$locationChangeStart', function (event, next, current) {
	        	var splits = next.split("/")	
	        	$rootScope.currentNav = splits[splits.length - 1];
       

	        });

    	}


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
    controller  : 'TimelineController'
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
.when('/throwback', {
    templateUrl : './assets/throwback/throwback.html',
    controller  : 'HomeController'
  })
  .otherwise({redirectTo: '/'});
});