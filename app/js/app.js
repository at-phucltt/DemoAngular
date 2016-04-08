'use strict';

// App module
var wfeApp = angular.module('PhucApp', [
  'ngRoute',        // All routing, navigating in the app goes here
  'wfeControllers', // Our beloved controller module collection
]);

wfeApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view/home.html',
      controller: 'HomeController',
    })
    .when('/contact', {
      templateUrl: 'view/contact.html',
      controller: 'ContactController',
    })
    .when('/about', {
      templateUrl: 'view/about.html',
      controller: 'AboutController',
    })
    // any link goes beyond defined routes will be redirected to /people route.
    .otherwise({
      redirectTo: '/',
    });
}]);
