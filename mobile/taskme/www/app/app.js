angular.module('taskme', ['ionic', 'taskme.controllers', 'taskme.services'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'app/views/bottom-menu.html',
                controller: 'MainCtrl'
            
            })
            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'app/views/left-menu.html',
                        controller: ''
                    }
                }
            })
            .state('tab.dash.welcome', {
              url: "/welcome",
              views: {
                'menuContent' :{
                  templateUrl: "app/views/welcome.html",
                  controller: ''
                }
              }
            })
            .state('tab.dash.develop', {
              url: "/develop",
              views: {
                'menuContent' :{
                  templateUrl: "app/parts/develop/views/develop.html",
                  controller: ''
                }
              }
            })
            .state('tab.dash.login', {
              url: "/login",
              views: {
                'menuContent' :{
                  templateUrl: "app/parts/login/views/login.html",
                  controller: ''
                }
              }
            })
            .state('tab.dash.about', {
              url: "/about",
              views: {
                'menuContent' :{
                  templateUrl: "app/parts/aboutUs/views/about-us.html",
                  controller: ''
                }
              }
            })
            .state('tab.dash.messages', {
              url: "/messages",
              views: {
                'menuContent' :{
                  templateUrl: "app/parts/messages/views/messages.html",
                  controller: 'ChatsCtrl'
                }
              }
            })
            .state('tab.dash.correspondence', {
              url: "/messages/:chatId",
              views: {
                'menuContent' :{
                  templateUrl: "app/parts/messages/views/correspondence.html",
                  controller: 'ChatDetailCtrl'
                }
              }
            })
            .state('tab.dash.my-tasks', {
              url: "/my-tasks",
              views: {
                'menuContent' :{
                  templateUrl: "app/parts/myTasks/views/my-tasks.html",
                  controller: ''
                }
              }
            })
            .state('tab.dash.profile', {
              url: "/profile",
              views: {
                'menuContent' :{
                  templateUrl: "app/parts/profile/views/profile.html",
                  controller: ''
                }
              }
            })
            .state('tab.dash.search', {
              url: "/search",
              views: {
                'menuContent' :{
                  templateUrl: "app/parts/search/views/search.html",
                  controller: ''
                }
              }
            })
            .state('tab.dash.settings', {
              url: "/settings",
              views: {
                'menuContent' :{
                  templateUrl: "app/parts/settings/views/settings.html",
                  controller: ''
                }
              }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash/welcome');

    })

     .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleLightContent();
                }
            });
        });
