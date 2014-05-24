var bilmesApp = angular.module('bilmesApp', ['ngRoute']);

bilmesApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'templates/home.html'
        })

        .when('/about', {
            templateUrl : 'templates/about.html'
        })

        .when('/contact', {
            templateUrl : 'templates/contact.html'
        });
});