(function() {
    'use strict';

    angular.module('taskMe', [
        'ui.bootstrap',
        'ui.router',
        'LocalStorageModule',
    ]).config(
        function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
            
        $urlRouterProvider.otherwise("main");
        
        $stateProvider
            .state('main', {
                url: '/main',
                views: {
                    "content-view": {
                        templateUrl: "app/shured/views/main.html"
                    },
                    "bar-view": {
                        templateUrl: "app/shured/views/navbar-standart.html",
                        controller: "NavBarController",
                        controllerAs: "NavBarCtrl"
                    }
                }
            }).state('registration', {
                url: '/registration',
                views: {
                    "content-view": {
                        templateUrl: "app/components/auth/views/registration.html",
                        controller: "RegistrationController",
                        controllerAs: "RegistrCtrl"
                    },
                    "bar-view": {
                        templateUrl: "app/components/auth/views/navbar-registration.html"
                    }
                }
            });
    });

    angular.module('taskMe').run(function($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function(err, req) {
            $state.go('main');
        });
    });
})();