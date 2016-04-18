(function () {
    'use strict';

    var controllerId = 'environmentController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'imageFactory', environmentController]);

    function environmentController($scope, $rootScope, imageFactory) {
        $scope.images = [];

        imageFactory.getImages(1 , "environment").success(function (data) {
            $scope.images = data;
        }).error(function (error) {
            // log errors
        });
    }
})();