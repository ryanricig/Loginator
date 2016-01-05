angular.module('myApp', ['ngAudio']);
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
    vm.score = 0;
    vm.nextPointValue = 100;
    vm.timeRemaining = 60;
    vm.countDownRemaining = 3;
    vm.username = "";
    vm.password = "";
    vm.gameStarted = false;
    vm.userMessage="";
    vm.addScore=0;
    vm.twoSecs=2;
    vm.realUN="a";
    vm.realPW="a";
    vm.monster = "http://powstatan.wikispaces.com/file/view/monster_standing.png/564140941/monster_standing.png";

    vm.localCredCheck=localCredCheck;

    var gameTimeout;
    var countdownTimeout;
    var twoSecsTimeout;
    var usernameElement = angular.element( document.querySelector( '#un' ) );
    var passwordElement = angular.element( document.querySelector( '#pw' ) );

    function localCredCheck(){
    
    //these will come at the end of the 2 second timer function
    vm.MultiplierMessage="";
    vm.userMessage="";

    if (angular.lowercase(vm.username)!=vm.realUN && angular.uppercase(vm.username)!=vm.realUN){
          //Username is not case-sensitive
            usernameElement.addClass('invalid');
            vm.username="";
            vm.addScore=0;
        }
    else{
      vm.username=vm.realUN;
      }
      
      if (vm.password!=vm.realPW){
        if (angular.lowercase(vm.password)==vm.realPW){
          vm.userMessage="Is your capslock on?";
        }

          passwordElement.addClass('invalid');
          vm.password="";
          vm.addScore=0;
      }
      
      
    if (vm.username==vm.realUN && vm.password==vm.realPW){
      if (vm.addScore<300){
        vm.addScore=vm.addScore+100;
      }
      usernameElement.removeClass('invalid');
      passwordElement.removeClass('invalid');
      vm.score=vm.score+vm.addScore;
      vm.twoSecs=2;
      twoSecondMessages();
      vm.username="";
      vm.password="";
    }

    }
  

    //SUCCESS MESSAGE TIMER
    function twoSecondMessages(){
      vm.userMessage = "NICE!";
      vm.multiplierMessage = "+" + vm.addScore;
      vm.monster = 'http://powstatan.wikispaces.com/file/view/monster_jumping.png/564140929/monster_jumping.png';
      if(vm.twoSecs > 1){
        vm.twoSecs--;
        twoSecsTimeout = $timeout(twoSecondMessages,1000);
      }else{
        vm.multiplierMessage = "";
        vm.userMessage = "";
        vm.monster =  "http://powstatan.wikispaces.com/file/view/monster_standing.png/564140941/monster_standing.png";
      }
    }

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
    activate();

    function activate() {
      startCountdownTimer();
    }
    

  }
})();
