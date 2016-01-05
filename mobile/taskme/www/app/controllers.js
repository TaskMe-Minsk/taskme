angular.module('taskme.controllers', [])

    .controller('DashCtrl', function ($scope, TaskService) {
        $scope.categories = TaskService.categories();
    })

    .controller('TaskCtrl', function($scope, TaskService){

    })

    

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })
    .controller('MainCtrl', function ($scope,   $ionicHistory) {
//        $ionicHistory.nextViewOptions({
//             disableBack: true
//        });
    });
