(function () {
    'use strict';

    angular
        .module('loginApp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('gameover', {
                url: '/gameover',
                templateUrl: 'app/gameover/gameover.html',
                controller: 'GameOverController',
                controllerAs: 'gameover'
            })
        ;

        $urlRouterProvider.otherwise('/');
    }

})();
