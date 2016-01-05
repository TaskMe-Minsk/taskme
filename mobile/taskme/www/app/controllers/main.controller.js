(function () {
    'use strict';

    angular.module('taskme').controller('MainController', [
        '$scope',
        '$state',
        function ($scope, $state) {
            $scope.navigateTo = function (path){
                $state.go(path);
            };
        }
    ]);
})();


