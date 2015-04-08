app.controller('DashboardCtrl', ['$scope', function($scope){
	$scope.tiles=[
	     {
			title: "Horario",
			description: "Consulta tu horario",
			image: "http://www.sanjeronimo.es/images/stories/Curso2013_2014/mayo/calendario.png",
			stateLink:"login.init"
	     },
	     {
			title: "Grupos",
			description: "Consulta tus grupos",
			image: "http://www.sanjeronimo.es/images/stories/Curso2013_2014/mayo/calendario.png",
			stateLink:"dashboard.mygroups"
		 },
		 {
			title: "Perfil",
			description: "Consulta tu perfil",
			image: "http://www.sanjeronimo.es/images/stories/Curso2013_2014/mayo/calendario.png",
			stateLink:"login.init"
		 },
		 {
			title: "Recibos",
			description: "Consulta tus recibos",
			image: "http://www.sanjeronimo.es/images/stories/Curso2013_2014/mayo/calendario.png",
			stateLink:"login.init"
		 },
		 {
			title: "Recibos",
			description: "Consulta tus recibos",
			image: "http://www.sanjeronimo.es/images/stories/Curso2013_2014/mayo/calendario.png",
			stateLink:"login.init"
		 }
	 ];
	
}]);