'use strict';

/**
 * @ngdoc function
 * @name omnivoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the omnivoreApp
 */
angular.module('omnivoreApp')
    .controller('ResultController', ['$scope', 'formFactory', function ($scope, formFactory) {
        $scope.sorted = formFactory.sorted;

        $scope.getTextToCopy = function() {            
            return $scope.sorted;
        }
    }]);
