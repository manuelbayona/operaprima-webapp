app.controller('profilesCtrl', ['$rootScope','$scope','httpFactory', function($rootScope,$scope,httpFactory){
	$scope.profiles = [{id:'1',name:'Javier',lastName: 'Lacalle',dni:'53538526J',birthDate:'13/10/1988',type:'STUDENT',state:'ACTIVE'},{id:'2',name:'Diego',lastName: 'Asensio',dni:'33538526J',birthDate:'13/10/1990',type:'STUDENT',state:'ACTIVE'},{id:'3',name:'Manuel',lastName: 'Bayona',dni:'99538526J',birthDate:'13/10/1982',type:'STUDENT',state:'ACTIVE'}];

	$scope.profileSelected = function(profile){
		$rootScope.profileSelected = profile;
		httpFactory.dashboard();
	}


}])