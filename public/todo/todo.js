angular.module('demoApp', [])
	.controller('TodoController', ['$scope', function($scope) {
		$scope.remaining = function() {
			return 0;
		}
	}]);