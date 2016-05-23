(function () {
    'use strict';

    var controllerId = 'lessonsController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'imageFactory', 'lessonFactory', lessonsController]);

    function lessonsController($scope, $rootScope, imageFactory, lessonFactory) {
        $scope.images = [];
        $scope.lessons = {};
        $rootScope.subject = "Tomatoes";

        imageFactory.getImages(1, "lessons").success(function (data) {
            $scope.images = data;
        }).error(function (error) {
            // log errors
        });

        lessonFactory.loadLesson($rootScope.subject).success(function (data) {
            $scope.lessons = data.lessons;
            console.log($scope.lessons);
            $rootScope.currentLesson = $scope.lessons.lesson;
            console.log($rootScope.currentLesson);
        }).error(function (error) {
            // log errors
        });

        $scope.show = function () {
            document.getElementById("0").style.visibility = "hidden";
        };
    }
})();