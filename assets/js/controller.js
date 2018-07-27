app.controller('HomeController', function($scope) {

	$scope.projects = {
		'a1' : true,
		'a2' : false,
		'a3' : false,
		'a4' : false,
		'a5' : false,
		'a6' : false
	}

	$scope.scrollTo = function(hash){
		$scope.reset();
		$scope.projects[hash] = true;
	}

	$scope.reset = function(){
		$scope.projects = {
		'a1' : false,
		'a2' : false,
		'a3' : false,
		'a4' : false,
		'a5' : false,
		'a6' : false
	}
	}

});