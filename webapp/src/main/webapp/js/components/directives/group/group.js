app.directive('group', [function(){
	// Runs during compile
	return {
		 scope: {
		 	group:'=ngModel'
		 },
		// controller: function($scope, $element, $attrs, $transclude) {},
		require: 'ngModel',
		restrict: 'EA',
		templateUrl: 'js/components/directives/group/templates/groupTemplate.html'
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
	};
}]);