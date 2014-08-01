'use strict';

/**
 * @ngdoc service
 * @name omnivoreApp.form
 * @description
 * # form
 * Factory in the omnivoreApp.
 */
angular.module('omnivoreApp')
  .factory('formFactory', function ( $http, $q ) {
    // Service logic
    // ...
    var service = 'http://graffiti/v1/omniture-tracking-',
    form = {},
    data = {},
    sorted = 'test';

    // Public API here
    return {

      get: function () {
          var dfd = $q.defer();

          $http({
              method: 'GET',
              url: 'combo_boxes_data.json'
          }).success(function (response) {
              dfd.resolve(response);
          });

          return dfd.promise;
      },
      submit: function () {
        console.log(data);

        return $http({
            url: 'service',
            method: "POST",
            data: data
       });
      },

      data : data,
      sorted : sorted
    };
  });
