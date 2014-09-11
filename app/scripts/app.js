'use strict';

/**
 * @ngdoc overview
 * @name hectorApp
 * @description
 * # hectorApp
 *
 * Main module of the application.
 */
angular
	.module('hectorApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/gallery', {
				templateUrl: 'views/gallery.html',
				controller: 'GalleryCtrl'
			})
			.when('/contact', {
				templateUrl: 'views/contact.html',
				controller: 'AboutCtrl'
			})
			.when('/hector', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);