app.controller('HomeController', function($scope) {

	$scope.style = "one";

	$scope.projects = {
		'a1' : true,
		'a2' : false,
		'a3' : false,
		'a4' : false,
		'a5' : false,
		'a6' : false
	}

	$scope.career = {
		'a1' : false,
		'a2' : false,
		'a3' : false,
		'a4' : false,
		'xa' : true
	}

	$scope.scrollTo = function(hash){
		$('#projectsMain').scrollTop(0);
		$scope.resetProjects();
		$scope.projects[hash] = true;
	}

	$scope.scrollToCareer = function(hash){
		$scope.resetCareer();
		$scope.career[hash] = true;
	}


	$scope.resetProjects = function(){
		$scope.projects = {
		'a1' : false,
		'a2' : false,
		'a3' : false,
		'a4' : false,
		'a5' : false,
		'a6' : false,
		}
	}

	$scope.resetCareer = function(){
		$scope.career = {
		'a1' : false,
		'a2' : false,
		'a3' : false,
		'a4' : false,
		'xa' : false		
		}
	}

});