(function () {
    'use strict';

    var controllerId = 'workController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'workFactory', 'imageFactory', workController]);

    function workController($scope, $rootScope, workFactory, imageFactory) {
        $rootScope.plant = {};
        $rootScope.level = 1;

        $scope.allPots = [];
        $scope.doniczka = [];
        $scope.pomidor = [];
        $scope.rot = [];
        
        workFactory.getWorkArea($rootScope.level).success(function (data) {
            $rootScope.plant = data;
            console.log($rootScope.plant);
        }).error(function (error) {
            // log errors
        });

        /*imageFactory.getImages(1, "work").success(function (data) {
            $scope.doniczka = data;
        }).error(function (error) {
            // log errors
        });*/

        imageFactory.getImages(1, "pot").success(function (data) {
            $scope.allPots = data;
        }).error(function (error) {
            // log errors
        });

        /*imageFactory.getImages(2, "work").success(function (data) {
            $scope.pomidor = data;
        }).error(function (error) {
            // log errors
        });*/

        $scope.$on('handleChangePotWork', function (event, args) {
            if (args.value < 4) {
                $scope.doniczka.splice(0, 1);
                $scope.doniczka.unshift($scope.allPots[args.value - 1]);
            }
            else if (args.value < 6) {
                $scope.doniczka.push($scope.allPots[args.value - 1]);
            }
        });

        $scope.$on('handleAddToFlower', function (event, args) {
            if(args.value == 6){
                $scope.pomidor.push($scope.allPots[args.value - 1]);
            }
            else if(args.value == 8){
                $scope.rot.push($scope.allPots[args.value]);
            }
        });
    }
})();