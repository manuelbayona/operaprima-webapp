/**
* Directiva del componente tile
*/
app.directive('tile', function(){
	return {
		scope: {
			title: '@title',
			description: '@description',
			stateLink: '@stateLink',
			image: '@image'
		},
		controller: function($scope, $element, $attrs, $transclude, $state) {
			
			$scope.applyAnimation = function(){
				console.log("Animation");
			};
			
			$scope.navigateState = function() {
				// El controller que use esta directiva debe definir este método.
				console.log("Navegando a url:"+$scope.stateLink);
				$state.go($scope.stateLink);
			};
		},
		//require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'js/components/directives/tile/templates/tileTemplate.html',
	};
});