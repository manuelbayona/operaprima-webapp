var app = angular.module('operaPrimaApp', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    
	$stateProvider
	.state('login',{
        abstract: true,
        views: {
        	'layout': {
                templateUrl:'js/login/templates/loginLayout.html'
            },
            'content@login': {
                templateUrl:'js/commons/templates/contentLogin.html'
            }
        }
    })
    .state('login.init',{
        url: '/login',
        templateUrl:'js/login/templates/loginView.html',
        controller: 'loginCtrl'
     })
    .state('login.profiles',{
        url: '/profiles',
        templateUrl:'js/profiles/templates/profilesTemplate.html',
        controller: 'profilesCtrl'
    })
    .state('dashboard',{
    	url: '/dashboard',
        abstract: true,
        views: {
        	'layout':{
        		templateUrl:'js/dashboard/templates/dashboardLayout.html',
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
        templateUrl:'js/dashboard/templates/dashboardTemplate.html',
        controller: 'DashboardCtrl'
    })
    .state('dashboard.mygroups',{
        url: '/myGroups',
        templateUrl:'js/groups/templates/groupsTemplate.html',
        controller: 'groupsCtrl'
    });

	$urlRouterProvider.otherwise('/login');
}]);