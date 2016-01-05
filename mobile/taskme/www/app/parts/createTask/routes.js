;(function(angular, app) {
  app.config(['$stateProvider', '$urlRouterProvider', function setRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab.setDetails', {
        url: "/task/details",
        views: {
          'menuContent' :{
            templateUrl: "app/parts/createTask/views/set_details.html",
            controller: 'CreateTaskCtrl'
          }
        }
      })
      .state('tab.setDate', {
        url: "/task/date",
        views: {
          'menuContent' :{
            templateUrl: "app/parts/createTask/views/set_date.html",
            controller: 'CreateTaskCtrl'
          }
        }
      })
      .state('tab.setAddress', {
        url: "/task/address",
        views: {
          'menuContent': {
            templateUrl: "app/parts/createTask/views/set_address.html",
            controller: 'CreateTaskCtrl'
          }
        }
      })
      .state('tab.setPrice', {
        url: "/task/price",
        views: {
          'menuContent': {
            templateUrl: "app/parts/createTask/views/set_price.html",
            controller: 'CreateTaskCtrl'
          }
        }
      })
      .state('tab.preview', {
        url: "/task/preview",
        views: {
          'menuContent': {
            templateUrl: "app/parts/createTask/views/preview.html",
            controller: 'CreateTaskCtrl'
          }
        }
      })
      .state('tab.taskCreated', {
        url: "/task/created",
        views: {
          'menuContent': {
            templateUrl: "app/parts/createTask/views/waiting.html",
            controller: 'MainCtrl'
          }
        }
      })
  }]);
})(angular, window.taskme);
