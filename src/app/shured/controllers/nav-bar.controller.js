(function () {
    'use strict';

    angular.module('taskMe').controller('NavBarController', [
        '$scope',
        '$state',
        function ($scope, $state) {
            var _this = this;
            
            this.goToRegistration = function(){
                $state.go('registration');
            };
        }
    ]);
})();