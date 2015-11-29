;(function(angular, app) {
  app.config(['$stateProvider', '$urlRouterProvider', function setRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'app/views/menu.html',
        controller: 'MainCtrl'

      })
      .state('tab.new-task', {
        url: "/new-task",
        views: {
          'menuContent' :{
            templateUrl: "app/parts/createTask/views/choose_category.html",
            controller: 'CreateTaskCtrl'
          }
        }
      })
      .state('tab.messages', {
        url: "/messages",
        views: {
          'menuContent' :{
            templateUrl: "app/parts/messages/views/messages.html",
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.settings', {
        url: "/settings",
        views: {
          'menuContent' :{
            templateUrl: "app/parts/settings/views/settings.html",
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.welcome', {
        url: "/welcome",
        views: {
          'menuContent' :{
            templateUrl: "app/views/welcome.html",
            controller: ''
          }
        }
      })
      .state('tab.develop', {
        url: "/develop",
        views: {
          'menuContent' :{
            templateUrl: "app/parts/develop/views/develop.html",
            controller: ''
          }
        }
      })
      .state('tab.login', {
        url: "/login",
        views: {
          'menuContent' :{
            templateUrl: "app/parts/login/views/login.html",
            controller: ''
          }
        }
      })
      .state('tab.about', {
        url: "/about",
        views: {
          'menuContent' :{
            templateUrl: "app/parts/aboutUs/views/about-us.html",
            controller: ''
          }
        }
      })
      .state('tab.correspondence', {
        url: "/messages/:chatId",
        views: {
          'menuContent' :{
            templateUrl: "app/parts/messages/views/correspondence.html",
            controller: 'ChatDetailCtrl'
          }
        }
      })
      .state('tab.my-tasks', {
        url: "/my-tasks",
        views: {
          'menuContent' :{
            templateUrl: "app/parts/myTasks/views/my-tasks.html",
            controller: ''
          }
        }
      })
      .state('tab.profile', {
        url: "/profile",
        views: {
          'menuContent' :{
            templateUrl: "app/parts/profile/views/profile.html",
            controller: ''
          }
        }
      })
      .state('tab.search', {
        url: "/search",
        views: {
          'menuContent' :{
            templateUrl: "app/parts/search/views/search.html",
            controller: ''
          }
        }
      })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/new-task');
  }]);
})(angular, window.taskme);
