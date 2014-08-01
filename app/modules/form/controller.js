'use strict';

/**
 * @ngdoc function
 * @name omnivoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the omnivoreApp
 */
angular.module('omnivoreApp')
    .controller('FormController', ['$scope', 'formFactory', '$location', function ($scope, formFactory, $location) {
        $scope.categories = [];
        $scope.selected = [];
        $scope.data = formFactory.data;

        formFactory
            .get()
            .then(function (data) {
                $scope.formData = data;
        });

        $scope.onSubmit = function () {
            formFactory
                .submit()
                .then(function( ) {
                    $location('/result');
                });           
        };

        $scope.getFormModel = function ( name ) {
            console.log(name)
          return $scope.data[ name ];
        };

    }]);


