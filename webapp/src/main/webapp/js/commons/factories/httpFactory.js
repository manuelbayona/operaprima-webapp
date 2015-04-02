app.factory('httpFactory', ['$state', function($state){
	
	var ajaxCalls = {};

	ajaxCall.login = function(user) {
		//TODO llamaremos al servidor para logear el usuario.
		 $state.go('shopping.detail',{id_product:idProducto});
	}

	return function name(){
		
	};
}])