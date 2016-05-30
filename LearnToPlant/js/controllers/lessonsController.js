(function () {
    'use strict';

    var controllerId = 'lessonsController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'imageFactory', 'lessonFactory', '$uibModal', lessonsController]);

    function lessonsController($scope, $rootScope, imageFactory, lessonFactory, $uibModal) {
        $scope.images = [];
        $scope.lessons = {};
        $scope.currentStep = 0;
        $rootScope.subject = "Tomatoes";

        //imageFactory.getImages(1, "lessons").success(function (data) {
        //    $scope.images = data;
        //}).error(function (error) {
        //    // log errors
        //});

        lessonFactory.loadLesson($rootScope.subject).success(function (data) {
            $scope.lessons = data.lessons;
            $rootScope.currentLesson = $scope.lessons.lesson;

            $scope.handleAction();
        }).error(function (error) {
            // log errors
        });

        $scope.handleAction = function () {
            if ($rootScope.currentLesson.items.item[$scope.currentStep].action === 'Show') {
                console.log($rootScope.currentLesson.items.item[$scope.currentStep]);

                var modalInstance = $uibModal.open({
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
                    size: "lg",
                    resolve: {
                        item: $rootScope.currentLesson.items.item[$scope.currentStep]
                    },
                    backdrop: 'static'
                });

                modalInstance.result.then(function (selectedItem) {
                    $scope.addToImages();
                    $scope.currentStep++;

                    if ($scope.currentStep < $rootScope.currentLesson.items.item.length) {
                        $scope.handleAction();
                    }
                });
            } else {
                console.log('dla rafałka');
                $scope.currentStep++;
                $scope.handleAction();
            }           
        }

        $scope.addToImages = function() {
            $scope.images.push({ description: $rootScope.currentLesson.items.item[$scope.currentStep].title });
        }

        $scope.show = function () {
            document.getElementById("0").style.visibility = "hidden";
        };
    }

    angular.module('app').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, item) {

        $scope.item = item;

        $scope.ok = function () {
            var checked = $("input[name=answear]:radio:checked");

            if (checked.val() === "true") {
                $uibModalInstance.close();
            }
            else {
                checked.next().css({
                    border: "3px red solid"
                });
            }
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });
})();
