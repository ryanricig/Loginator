(function() {
  'use strict';

  angular
    .module('loginApp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($state, credentialService) {

    //display variables
    var vm = this;
    vm.loginError = false;

    vm.credentials = {
      un: '',
      pw: ''
    };

    vm.response = null;

    //internal variables

    //view functions
    vm.checkCreds = function(){
      vm.loginError = false;

      if(!vm.credentials.un || !vm.credentials.pw){
        vm.loginError = true;

      }else{
        vm.response = credentialService.checkCredentials(vm.credentials);

        if(vm.response > 0){
          $state.go('home');
        }else{
          vm.loginError = true;
        }
      }

    };


    //internal functions
    activate();

    function activate() {


    }

  }
})();
