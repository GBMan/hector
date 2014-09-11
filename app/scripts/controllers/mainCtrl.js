'use strict';

/**
 * @ngdoc function
 * @name hectorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hectorApp
 */
angular.module('hectorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
