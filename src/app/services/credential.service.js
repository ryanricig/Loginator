(function () {
  'use strict';

  angular
    .module('loginApp')
    .factory('credentialService', credentialService);


  /** @ngInject */
  function credentialService() {

    var service = {

      credentials: {
        un: '',
        pw: ''
      },
      checkCredentials: checkCredentials

    };


    function checkCredentials(credentials) {
      console.log('credentialService: checkCredentials: ', credentials);
      service.credentials = credentials;
      return Math.round(Math.random());
    }


    return service;
  }

})();


