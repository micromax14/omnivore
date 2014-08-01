'use strict';

/**
 * @ngdoc function
 * @name omnivoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the omnivoreApp
 */
angular.module('omnivoreApp')
    .controller('ResultController', ['$scope', 'formFactory', 'uiZeroclipConfig', function ($scope, formFactory, uiZeroclipConfigProvider) {
        $scope.sorted = formFactory.sorted;

        uiZeroclipConfigProvider.setZcConf( formFactory.sorted );

        uiZeroclipConfigProvider.setOptions({
          buttonText: 'Copy Me!'
        });
    }]);
