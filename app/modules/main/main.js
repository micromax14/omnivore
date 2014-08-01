'use strict';

/**
 * @ngdoc function
 * @name omnivoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the omnivoreApp
 */
angular.module('omnivoreApp')
  .controller('MainController', function ($scope, $location) {
      $location.url('/result')
  });