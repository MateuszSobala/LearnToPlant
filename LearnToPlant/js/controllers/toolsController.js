(function () {
    'use strict';

    var controllerId = 'toolsController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'imageFactory', toolsController]);

    function toolsController($scope, $rootScope, imageFactory) {
        $scope.images = [];

        $scope.hoverIn = function () {
            this.hoverEdit = true;
        };

        $scope.hoverOut = function () {
            this.hoverEdit = false;
        };

        imageFactory.getImages($rootScope.level, "tools").success(function (data) {
            $scope.images = data;
            console.log(data);
        }).error(function (error) {
            // log errors
        });
    }
})();