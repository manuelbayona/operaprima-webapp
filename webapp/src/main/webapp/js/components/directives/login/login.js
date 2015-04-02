/**
* Directiva del componente login
*/
app.directive('login', function(){
	return {
		scope: {
			user: '=ngModel'
		}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude) {
			$scope.isValid = function(ngModelCtrl) {
				return ngModelCtrl.$dirty && ngModelCtrl.$valid;
			}

			$scope.inValid = function(ngModelCtrl) {
				return ngModelCtrl.$dirty && ngModelCtrl.$invalid;
			}
			
			$scope.submit = function() {
				// El controller que use esta directiva debe definir este método.
				$scope.$parent.formCallBack();
			}
		},
		require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'js/components/directives/login/templates/loginTemplate.html',
		// replace: true,
		// transclude: true,
		//link: function($scope, iElm, iAttrs, controller) {
		// 	
		// }
	};
});