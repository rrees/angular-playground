angular.module('demoApp', [])
	.controller('TodoController', ['$scope', function($scope) {

		var todoItems = null;



		$scope.remaining = function() {
			return 0;
		}
	}]);