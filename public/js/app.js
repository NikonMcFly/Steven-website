"use strict";

var app = angular.module('MyApp', ['ngRoute', 'ngAnimate', 'snap']);


app.config(function($routeProvider){

		$routeProvider.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		})
		// $routeProvider.when('/farming', {
		// 	templateUrl: 'views/farm.html',
		// 	controller: 'farmCtrl'
		// })
		$routeProvider.when('/study', {
			templateUrl: 'views/study.html',
			controller: 'studyCtrl'
		})
		$routeProvider.when('/resume', {
			templateUrl: 'views/resume.html',
			controller: 'resumeCtrl'
		})
    .otherwise({redirectTo: '/'});

  });
