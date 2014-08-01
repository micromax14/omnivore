'use strict';

/**
 * @ngdoc overview
 * @name omnivoreApp
 * @description
 * # omnivoreApp
 *
 * Main module of the application.
 */
angular
  .module('omnivoreApp', [
    'ui.router',
    'ngAnimate',
    'ngTouch',
    'angular.zeroclipboard'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    //$urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('main', {
            url: "/",
            templateUrl: "modules/main/main.html",
            controller: 'MainController'
        })
        .state('result', {
            url: "/result",
            templateUrl: "modules/result/_result.html",
            controller: 'ResultController'
        });
    });
  