(function() {
  'use strict';

  angular
    .module('loginApp')
    .controller('GameOverController', GameOverController);

  /** @ngInject */
  function GameOverController(dataService, credentialService) {

    //display variables
    var vm = this;
    vm.bestStreak=dataService.bestStreak;
    vm.userMessage = '';
    vm.gameLogo = './assets/images/Loginator-Logo.png';
    //vm.longestStreak = main.vm.longestStreak;
    vm.gameTime = credentialService.credentials.tm;
    vm.highScore = dataService.highScore;
    vm.score = dataService.gameScore;
    if (vm.score==vm.highScore){
      vm.userMessage="NEW HIGH SCORE!!!!";
    }
    vm.yay = './assets/sounds/yay.mp3';
  }
})();
