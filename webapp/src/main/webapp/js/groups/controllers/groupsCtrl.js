app.controller('groupsCtrl', ['$rootScope','$scope', function($rootScope,$scope){
	/*TODO: Esto se debe de consultar*/
	$scope.listGroup = [{
		name:"Voley Playa",
		description:"Es una variante del voleibol que se juega sobre arena, generalmente en la playa, aunque son muy populares los torneos en localidades del interior con campos artificiales. Es una disciplina olímpica desde los Juegos Olímpicos de Atlata 1996",
		equipement: "Pelotas de playa!",
		teacher: "Javier Lacalle"
	},
	{
		name:"Futbol",
		description:"22 tios pegandole patadas a un balón",
		equipement: "una pelota monda y lironda",
		teacher: "Diego Asensio"
	}];

	$rootScope.title="Mis grupos";


}])