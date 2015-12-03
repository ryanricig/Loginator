(function() {
  'use strict';

  angular
    .module('loginApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;

    vm.testContent = "Hey!";


    activate();

    function activate() {

    }

  }
})();
