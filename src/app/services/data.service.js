(function () {
  'use strict';

  angular
    .module('loginApp')
    .factory('dataService', dataService);


  /** @ngInject */
  function dataService($localForage, $q) {

    var service = {
      highScore: 0,
      gameScore: 0,
      setHighScore: setHighScore,
      getHighScore: getHighScore,
      clearHighScore: clearHighScore
    };


    function setHighScore(score) {

      var deferred = $q.defer();

      service.gameScore = score;

      if (score > service.highScore) {
        $localForage.setItem('highScore', score).then(function () {
          service.highScore = score;
          console.log('dataService: setHighScore: set new high score: ', score);
          deferred.resolve(true);
        });
      } else {
        console.log('dataService: setHighScore: existing high score was higher');
        deferred.resolve(false);
      }

      return deferred.promise;
    }

    function getHighScore() {

      var deferred = $q.defer();

      $localForage.getItem('highScore').then(function (highScore) {
        service.highScore = highScore;
        console.log('dataService: getHighScore: set high score: ', highScore);
        deferred.resolve(highScore);
      });

      return deferred.promise;
    }

    function clearHighScore() {
      $localForage.removeItem('highScore').then(function () {
        service.highScore = 0;
        console.log('dataService: clearHighScore: cleared high score');
      });
    }

    return service;
  }

})();


