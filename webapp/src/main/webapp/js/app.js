var app = angular.module('operaPrimaApp', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('operaPrima',{
        url: '/operaPrima',
        abstracts: true,
        views: {
            content: {
                templateUrl:'js/commons/templates/content.html'
            }
        }
    }).state('operaPrima.login',{
        url: '/login',
        templateUrl:'js/login/template/loginView.html',
        controller: 'loginCtrl'
    });

	$urlRouterProvider.otherwise('/operaPrima/login');
});