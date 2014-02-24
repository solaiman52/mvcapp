//// create the module and name it scotchApp
//var scotchApp = angular.module('scotchApp', []);

//scotchApp.config(function ($routeProvider) {
//    $routeProvider
//    	.when('/', {
//			    templateUrl: 'pages/home.html',
//			    controller: 'mainController'
//			})
//            .when('/home', {
//                templateUrl: 'pages/home.html',
//                controller: 'mainController'
//            })
//    // route for the about page
//			.when('/about', {
//			    templateUrl: 'pages/about.html',
//			    controller: 'aboutController'
//			})
//    // route for the contact page
//			.when('/contact', {
//			    templateUrl: 'pages/contact.html',
//			    controller: 'contactController'
//			});
//});



// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope, invitationFileTranslationService, $http) {    
    _.delay(function () {
        var messages = invitationFileTranslationService.loadLanguages();
        debugger;
    },4000);


    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';


    //    var url = "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/notsent/statustext";

    //    for (var i = 0; i < 4; i++) {
    //        callservice(url)
    //    }

    //    function put(key, data) {
    //        if (data) {
    //            localStorage.setItem(key, data);
    //        } else {
    //            localStorage.removeItem(key);
    //        }
    //    };

    //    function callservice(url) {
    //        delete $http.defaults.headers.common['X-Requested-With'];
    //        $http.get("http://i18n.trustpilot.com/v1/translations/en-us?keys=" + url).success(function (result) {
    //         
    //            for (var propertyName in result) {
    //                put(propertyName, result[propertyName]);
    //            }

    //            callservice("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/notsent/actionconfirmationmessage");
    //        }).error(function (error) {
    //            console.log('LoadLanguagesInBatch error' + error);
    //        });
    //    }
});

scotchApp.controller('aboutController', function ($scope) {

    // create a message to display in our view
    $scope.message = 'Tell me about your self!';
});

scotchApp.controller('contactController', function ($scope) {

    // create a message to display in our view
    $scope.message = 'Tell me about your contact details!';
});