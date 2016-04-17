(function () {
    'use strict';

    var controllerId = 'toolsController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'imageFactory', toolsController]);

    function toolsController($scope, $rootScope, imageFactory) {
        $scope.images = [];

        imageFactory.getImages($rootScope.level, "tools").success(function (data) {
            $scope.images = data;
        }).error(function (error) {
            // log errors
        });
    }
})();