'use strict';

/**
 * @ngdoc function
 * @name lexicographicApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lexicographicApp
 */
angular.module('lexicographicApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
