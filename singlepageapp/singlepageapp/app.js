// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', []);

scotchApp.config(function ($routeProvider) {
    $routeProvider
    	.when('/', {
    	    templateUrl: 'pages/home.html',
    	    controller: 'mainController'
    	})
            .when('/home', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })
    // route for the about page
			.when('/about', {
			    templateUrl: 'pages/about.html',
			    controller: 'aboutController'
			})
    // route for the contact page
			.when('/contact', {
			    templateUrl: 'pages/contact.html',
			    controller: 'contactController'
			});
});