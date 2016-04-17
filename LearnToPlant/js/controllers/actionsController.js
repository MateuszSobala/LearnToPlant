(function () {
    'use strict';

    var controllerId = 'actionsController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'actionFactory', actionsController]);

    function actionsController($scope, $rootScope, actionFactory) {
        $scope.images = [];

        $scope.handleAction = function (action, value) {
            console.log(action + ": " + value);
            console.log($rootScope.plant);
            actionFactory.handleAction($rootScope.plant, action, value).success(function (data) {
                $rootScope.plant = data;
            }).error(function (error) {
                // log errors
            });
        }
        
    }
})();