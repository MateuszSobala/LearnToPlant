﻿(function () {
    'use strict';

    var controllerId = 'toolsController';

    angular.module('app').controller(controllerId,
        ['$scope', '$rootScope', 'lessonFactory', 'imageFactory',toolsController]);

    function toolsController($scope, $rootScope, lessonFactory, imageFactory) {
        $scope.images = [];
        $scope.hover = true;
        $scope.toolsToLesson = [];

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
            var itemsInLesson = data.lessons.lesson.items.item;
            for (var item in itemsInLesson) {
                if (itemsInLesson[item].action == "Action") {
                    $scope.toolsToLesson.push(itemsInLesson[item]);
                }
            }

            imageFactory.getImages($rootScope.level, "tools").success(function (data) {
                $scope.images = data;
                console.log(data);

                var toDelete = [];
                var toDeleteImage = [];
                for (var item in $scope.images) {
                    for (var subimage in $scope.images[item].SubImages) {
                        if (isInTools($scope.images[item].SubImages[subimage].Action)) {
                            toDelete.unshift(item);
                            toDeleteImage.unshift(subimage);
                        }
                    }
                }
                for (var item in toDelete) {
                    $scope.images[toDelete[item]].SubImages.splice(toDeleteImage[item], 1);
                }

            }).error(function (error) {
                // log errors
            });

            console.log($scope.toolsToLesson);
        }).error(function (error) {
            // log errors
        });

        function isInTools(action) {
            for (var item in $scope.toolsToLesson) {
                if ($scope.toolsToLesson[item].component["@action"] == action)
                    return false;
            }
            return true;
        }

        $scope.$on('handleEraseItem', function (event, args) {
            $scope.images.splice(0, 1);
            $scope.$emit('handleChangePot', { value: args.value });
        });

        $scope.$on('handleAddToPot', function (event, args) {
            $scope.images.splice(0, 1);
            $scope.$emit('handleChangePot', { value: args.value });
        });

        $scope.$on('handleAddToFlower', function (event, args) {
            $scope.images.splice(0, 1);
        });
    }
})();