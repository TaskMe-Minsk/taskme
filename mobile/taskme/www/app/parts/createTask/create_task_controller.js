;(function(angular, app) {
  app.controller('CreateTaskCtrl', [
    '$scope',
    'CreateTaskService',
    'CategoriesService',
    function($scope, CreateTaskService, CategoriesService) {
      $scope.categories = CategoriesService.categories();

      $scope.newTask = function(category) {

      };

      $scope.setDetails = function(details) {
      };

      $scope.setDateTime = function(date, time) {
      };
      $scope.setLocation = function(location) {
      };
      $scope.setPrice = function(price) {
      };
      $scope.createTask = function() {
      };

    }]);
})(angular, window.taskme);
