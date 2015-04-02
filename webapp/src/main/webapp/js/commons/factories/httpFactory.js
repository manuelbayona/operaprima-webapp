app.factory('httpFactory', ['$state', function($state){
	
	var ajaxCalls = {};

	ajaxCalls.login = function(user) {
		//TODO llamaremos al servidor para logear el usuario.
		 $state.go('login.profiles');
	}

	ajaxCalls.dashboard = function(){
		$state.go('dashboard.init');
	}

	return ajaxCalls;
}])