(function () {
    'use strict';

    var controllerId = 'workController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'workFactory', 'imageFactory', workController]);

    function workController($scope, $rootScope, workFactory, imageFactory) {
        $rootScope.plant = {};
        $rootScope.level = 1;

        workFactory.getWorkArea($rootScope.level).success(function (data) {
            $rootScope.plant = data;
            console.log($rootScope.plant);
        }).error(function (error) {
            // log errors
        });

        imageFactory.getImages(1, "work").success(function (data) {
            $scope.doniczka = data;
        }).error(function (error) {
            // log errors
        });

        imageFactory.getImages(2, "work").success(function (data) {
            $scope.pomidor = data;
        }).error(function (error) {
            // log errors
        });
    }
})();