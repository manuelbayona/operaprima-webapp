app.factory('httpFactory', ['$state','$http','$q', function($state,$http,$q){
	
	var ajaxCalls = {};

	ajaxCalls.login = function(user) {
		//TODO llamaremos al servidor para logear el usuario.
		// TODO usar promesas??
		$state.go('login.profiles');
	}

	ajaxCalls.getProfiles = function(userId){
		var urlLogin = 'http://localhost:8080/OperaPrima/services/V01/users/'+userId+'/persons';
		return $http.get(urlLogin);
	}

	ajaxCalls.dashboard = function(){
		$state.go('dashboard.init');
	}

	return ajaxCalls;
}])