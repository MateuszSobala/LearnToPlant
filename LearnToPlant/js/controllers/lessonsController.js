(function () {
    'use strict';

    var controllerId = 'lessonsController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'imageFactory', lessonsController]);

    function lessonsController($scope, $rootScope, imageFactory) {
        $scope.images = [];
        
        imageFactory.getImages(1, "lessons").success(function (data) {
            $scope.images = data;
        }).error(function (error) {
            // log errors
        });

        $scope.show = function () {
            document.getElementById("0").style.visibility = "hidden";
        };
    }
})();