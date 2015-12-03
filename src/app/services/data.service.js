(function() {
  'use strict';

  angular
    .module('loginApp')
      .factory('dataService', dataService);


  /** @ngInject */
  function dataService() {

        var service = {
            highScore: 0,
            gameScore:0
        };

        return service;
      }

})();


