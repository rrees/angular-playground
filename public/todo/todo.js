angular.module('demoApp', [])
	.controller('TodoController', ['$scope', function($scope) {

		var todoItems = null;

		require(['https://cdn.jsdelivr.net/immutable.js/2.5.0/Immutable.min.js'], function(immutable) {
			console.log(immutable);

			console.log(todoItems);
		});

		$scope.remaining = function() {
			return 0;
		}
	}]);