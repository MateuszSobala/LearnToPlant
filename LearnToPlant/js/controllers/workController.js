(function () {
    'use strict';

    var controllerId = 'workController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'workFactory', workController]);

    function workController($scope, $rootScope, workFactory) {
        $rootScope.plant = {};
        $rootScope.level = 1;
        
        workFactory.getWorkArea($rootScope.level).success(function (data) {
            $rootScope.plant = data;
            console.log($rootScope.plant);
        }).error(function (error) {
            // log errors
        });
    }
})();