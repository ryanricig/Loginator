(function() {
  'use strict';

  angular
    .module('loginApp')
    .controller('GameOverController', GameOverController);

  /** @ngInject */
  function GameOverController(dataService) {

    //display variables
    var vm = this;
    vm.highScore = dataService.highScore;
    vm.score = dataService.gameScore;

  }
})();
