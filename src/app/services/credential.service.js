(function() {
  'use strict';

  angular
    .module('loginApp')
      .factory('credentialService', credentialService);


  /** @ngInject */
  function credentialService($http) {

        var service = {};
        service.checkCredentials = function () {
          //return $http.post(urlBase, cust);
          return Math.round(Math.random());
        };

        //internal variables
        var urlBase = '/api/customers';

        return service;
      }

})();


