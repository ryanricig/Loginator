(function() {
  'use strict';

  angular
    .module('loginApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $state, dataService) {

    //display variables
    var vm = this;

    vm.highScore = dataService.highScore;
    vm.score = dataService.score;
    vm.nextPointValue = 100;
    vm.timeRemaining = 10;
    vm.countDownRemaining = 3;
    vm.userName = "Johnny";
    vm.gameStarted = false;



    var gameTimeout;
    var countdownTimeout;


    //COUNTDOWN TIMER
    function startCountdownTimer(){
      countdownTimeout = $timeout(onCountdownTimeout,1000);
    }

    function onCountdownTimeout(){
      if(vm.countDownRemaining > 1){
        vm.countDownRemaining--;
        console.log(vm.countDownRemaining);
        countdownTimeout = $timeout(onCountdownTimeout,1000);
      }else{
        vm.countDownRemaining = "GO!";
        $timeout(startGameTimer,1500);
        stopCountdownTimer();
      }
    }
    function stopCountdownTimer(){
      $timeout.cancel(countdownTimeout);
    }

    //GAME TIMER
    function startGameTimer(){
      vm.gameStarted = true;
      gameTimeout = $timeout(onTimeout,1000);
    }
    function onTimeout(){
      if(vm.timeRemaining > 0){
        vm.timeRemaining--;
        gameTimeout = $timeout(onTimeout,1000);
      }else{
        stopTimer();
        $state.go('gameover');
      }
    }
    function stopTimer(){
      $timeout.cancel(gameTimeout);
    }

    //internal variables

    //display functions


    //internal functions
    activate();

    function activate() {
      startCountdownTimer();
    }

  }
})();
