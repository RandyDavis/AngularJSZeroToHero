angular.module('minmax', [])
    .controller('MinMaxCtrl', ["$scope", "$http", function($scope, $http) {
        $scope.formModel = {};

        $scope.onSubmit = function () {
            console.log("Hey, I'm submitted!");
            console.log($scope.formModel);

            $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel)
                .success(function(data) {
                    console.log(": )");
                })
                .error(function(data) {
                    console.log(":(");
                });
        };
    }]);


// https://minmax-server.herokuapp.com/register/'