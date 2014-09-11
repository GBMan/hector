'use strict';

/**
 * @ngdoc function
 * @name hectorApp.controller:AboutCtrl
 * @description
 * # GalleryCtrl
 * Controller of the hectorApp
 */
angular.module('hectorApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
