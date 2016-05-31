(function () {
    'use strict';

    var controllerId = 'actionsController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'actionFactory', actionsController]);

    function actionsController($scope, $rootScope, actionFactory) {
        $scope.images = [];

        $scope.$on('handleLesson', function (event, args) {
            if (args.value < 4) {
                $scope.$broadcast('handleEraseItem', { value: args.value });
            }
            else if(args.value < 6){
                $scope.$broadcast('handleAddToPot', { value: args.value });
            }
            else {
                $scope.$broadcast('handleAddToFlower', { value: args.value });
            }
        });

        $scope.$on('handleChangePot', function (event, args) {
            $scope.$broadcast('handleChangePotWork', { value: args.value });
        });

        $scope.handleAction = function (action, value) {
            // actionFactory.handleAction($rootScope.plant, action, value).success(function (data) {
            //     $rootScope.plant = data;
            // }).error(function (error) {
            // log errors
            $scope.$broadcast('handleActionPlant', { acton: action, value: value });
        }
        
    }
})();