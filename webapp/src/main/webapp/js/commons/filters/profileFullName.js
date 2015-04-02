app.filter('profileFullName',['$filter',function($filter){
	return function(profile) {
		return profile.name+' '+profile.lastName;
	}
}])