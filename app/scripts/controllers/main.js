'use strict';

/**
 * @ngdoc function
 * @name catawbacountyheatmaps.controller:MainController
 * @description
 * # MainCtrl
 * Controller of the catawbacountyheatmapsApp
 */
angular.module('catawbacountyheatmaps')
  .controller('MainController', function ($scope, mainFactory) {
    $scope.hello = 'Hello World!';
    $scope.message = mainFactory.meaningOfLife;
  });
