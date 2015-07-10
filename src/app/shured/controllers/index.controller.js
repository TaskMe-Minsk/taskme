(function () {
    'use strict';

    angular.module('taskMe').controller('IndexController', [
        '$scope',
        '$state',
        function ($scope, $state) {
            var _this = this;
        
            this.goToMainPage = function(){
                $state.go('main');
            };
        
        }
    ]);
})();