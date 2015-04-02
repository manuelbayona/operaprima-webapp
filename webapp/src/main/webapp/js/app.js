var app = angular.module('operaPrimaApp', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    
	$stateProvider
	.state('login',{
        abstract: true,
        views: {
        	'layout': {
                templateUrl:'js/login/template/loginLayout.html'
            },
            'content@login': {
                templateUrl:'js/commons/templates/content.html'
            }
        }
    })
    .state('login.init',{
        url: '/login',
        templateUrl:'js/login/template/loginTemplate.html',
        controller: 'loginCtrl'
    })
    .state('dashboard',{
    	url: '/dashboard',
        abstract: true,
        views: {
        	'layout':{
        		templateUrl:'js/dashboard/template/dashboardLayout.html',
        	},
        	'header@dashboard': {
        		templateUrl: 'js/commons/templates/header.html'
        	},
            'content@dashboard': {
                templateUrl:'js/commons/templates/content.html'
            },
            'footer@dashboard': {
        		templateUrl: 'js/commons/templates/footer.html'
        	}
        }
    })
    .state('dashboard.init',{
        url: '/init',
        templateUrl:'js/dashboard/template/dashboardTemplate.html',
        controller: 'DashboardCtrl'
    });

	$urlRouterProvider.otherwise('/login');
});