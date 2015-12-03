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

    vm.userInfo = {
      un: null,
      pw: null
    };

    vm.response = null;

    //internal variables

    //view functions
    vm.checkCreds = function(){
      vm.loginError = false;

      vm.response = credentialService.checkCredentials();

      if(vm.response > 0){
        $state.go('home');
      }else{
        vm.loginError = true;
      }

    };


    //internal functions
    activate();

    function activate() {


    }

  }
})();
