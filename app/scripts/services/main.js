'use strict';

/**
 * @ngdoc service
 * @name catawbacountyheatmapsApp.main
 * @description
 * # main
 * Factory in the catawbacountyheatmapsApp.
 */
angular.module('catawbacountyheatmapsApp')
  .factory('main', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
