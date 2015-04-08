app.controller('DashboardCtrl', ['$scope','$rootScope', function($scope, $rootScope){
	$rootScope.title="Inicio";
	$scope.tiles=[
	     {
			title: "Horario",
			description: "Consulta tu horario",
			image: "content/icons/calendar.png",
			stateLink:"login.init"
	     },
	     {
			title: "Grupos",
			description: "Consulta tus grupos",
			image: "content/icons/groups.png",
			stateLink:"dashboard.mygroups"
		 },
		 {
			title: "Perfil",
			description: "Consulta tu perfil",
			image: "content/icons/profile.png",
			stateLink:"login.init"
		 },
		 {
			title: "Recibos",
			description: "Consulta tus recibos",
			image: "content/icons/bills.png",
			stateLink:"login.init"
		 },
		 {
			title: "Recibos",
			description: "Consulta tus recibos",
			image: "content/icons/bills.png",
			stateLink:"login.init"
		 }
	 ];
	
}]);