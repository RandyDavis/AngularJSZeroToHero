angular.module('minmax', [])
    .controller('MinMaxCtrl', ["$scope", function ($scope) {
        $scope.formModel = {};

        $scope.onSubmit = function () {
            console.log("Hi, I'm Submitted!");
            console.log($scope.formModel);
        }
    }]);