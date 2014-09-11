'use strict';

/**
 * @ngdoc function
 * @name hectorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hectorApp
 */
angular.module('hectorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
