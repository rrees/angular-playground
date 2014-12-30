angular.module('adviceApp', [])
	.controller('EightBallController', ['$scope', function($scope) {

		var advice = [
			"Try again later",
			"Maybe not",
			"Go for it",
			"Not a good idea",
		];

		$scope.currentAdvice = advice[0];

		$scope.hasAdvice = false;

		$scope.seekAdvice = function() {
			if(!$scope.hasAdvice) {
				$scope.hasAdvice = true;
			}

			$scope.currentAdvice = advice[randomInt(0, advice.length - 1)];
		}

		function randomInt(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}
	}]);