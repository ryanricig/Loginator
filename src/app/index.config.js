(function() {
  'use strict';

  angular
    .module('loginApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $localForageProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party libs
    $localForageProvider.config({
      name        : 'loginator', // name of the database and prefix for your data, it is "lf" by default
      storeName   : 'data', // name of the table
      description : 'Data for the loginator game'
    });

  }

})();
