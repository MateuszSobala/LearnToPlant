(function () {
    'use strict';

    var controllerId = 'workController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'workFactory', workController]);

    function workController($scope, $rootScope, workFactory) {
        $scope.stage = [];
        /*
        imageFactory.getWorkArea().success(function (data) {
            $scope.stage = data;
        }).error(function (error) {
            // log errors
        });
        */
        $rootScope.level = 1;
    }
})();