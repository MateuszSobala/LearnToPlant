(function () {
    'use strict';

    var controllerId = 'lessonsController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'imageFactory', 'lessonFactory', '$uibModal', lessonsController]);

    function lessonsController($scope, $rootScope, imageFactory, lessonFactory, $uibModal) {
        $scope.images = [{ text: 'Lekcja 1', path: '../Images/Icon1_1.png', items: []}];
        $scope.lessons = {};
        $scope.currentStep = 0;
        $scope.currentLesson = 0;
        $rootScope.subject = "Tomatoes";

        $scope.hoverInOut = function () {
            if (this.hover) {
                this.hoverEdit = true;
                this.hover = false;
            }
            else {
                this.hoverEdit = false;
                this.hover = true;
            }
        }

        lessonFactory.loadLesson($rootScope.subject).success(function (data) {
            $scope.lessons = data.lessons;
            $rootScope.currentLesson = $scope.lessons.lesson;

            $scope.handleAction();
        }).error(function (error) {
            // log errors
        });

        $scope.handleAction = function () {
            if ($rootScope.currentLesson.items.item[$scope.currentStep].action === 'Show') {
                var modalInstance = $scope.showLesson($scope.currentStep);

                modalInstance.result.then(function () {
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

        $scope.showLesson = function (index) {
            return $uibModal.open({
                templateUrl: 'myModalContent.html',
                controller: 'modalInstanceController',
                size: "lg",
                resolve: {
                    item: $rootScope.currentLesson.items.item[index]
                },
                backdrop: 'static'
            });
        };

        $scope.addToImages = function () {
            $scope.images[0].items.push({  id: $scope.currentStep, description: $rootScope.currentLesson.items.item[$scope.currentStep].title, path: '../Images/icon1_' + $rootScope.currentLesson.items.item[$scope.currentStep].id + '.jpg' });
        }

        $scope.show = function () {
            document.getElementById("0").style.visibility = "hidden";
        };
    }
})();
