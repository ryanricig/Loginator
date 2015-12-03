(function() {
  'use strict';

  angular
    .module('loginApp')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib

  }

})();
