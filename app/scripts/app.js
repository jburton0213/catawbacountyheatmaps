'use strict';

/**
 * @ngdoc overview
 * @name catawbacountyheatmapsApp
 * @description
 * # catawbacountyheatmapsApp
 *
 * Main module of the application.
 */
angular
  .module('catawbacountyheatmaps', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'mainFactory'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
