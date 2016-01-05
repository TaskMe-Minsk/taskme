;
(function (angular, app) {
  app.controller('CreateTaskCtrl', [
    '$rootScope',
    '$scope',
    '$state',
    'CreateTaskService',
    'CategoriesService',
    function ($rootScope, $scope, $state, CreateTaskService, CategoriesService) {
      $scope.categories = CategoriesService.categories();

      $scope.chooseCategory = function (category) {
        $rootScope.task = {"category": category};
        $state.go("tab.setDetails");
      }

      $scope.goToSetDate = function () {
        $state.go("tab.setDate");
      };

      $scope.goToSetAddress = function () {
        if ($scope.noTime) {
          $rootScope.task.date = null;
          $rootScope.task.time = null;
        }
        $state.go("tab.setAddress");
      };

      $scope.goToSetPrice = function () {
        $state.go("tab.setPrice");
      };

      $scope.goToPreview = function () {
        if ($scope.noPrice) {
          $rootScope.task.price = null;
        }
        $state.go("tab.preview");
      };

      $scope.createTask = function () {
        CreateTaskService.createTask($rootScope.task,
        function(data) {
          $state.go("tab.taskCreated");
        },
        function(data){
          alert(data.error);
        });
        $state.go("tab.taskCreated");
      };

    }]);
})(angular, window.taskme);
