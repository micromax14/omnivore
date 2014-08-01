'use strict';

/**
 * @ngdoc function
 * @name omnivoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the omnivoreApp
 */
angular.module('omnivoreApp')
  .controller('MainController', function ($scope) {
    
  }).
  controller('MainCtrl', ['$scope', 'DataLoader', function ($scope, DataLoader) {
    $scope.categories = [];
    $scope.selected = [];

    DataLoader.get().then(function (data) {
      $scope.formData = data;
      console.log(data)
    });
  }]).
  service('DataLoader', ['$http', '$q', function ($http, $q) {
    function get() {

      var dfd = $q.defer();

      $http({
        method: 'GET',
        url: 'combo_boxes_data.json'
      }).success(function (response) {
        dfd.resolve(response);
      });

      return dfd.promise;
    }

    return {
      get: get
    };
  }]);