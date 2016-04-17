(function () {
    'use strict';

    angular.module('app').service('imageService', function ($http) {

        this.getImages = function getImages(level, component) {
            return $http({
                url: '/api/Images',
                method: "GET",
                params: { "component": component, "level": level }
            });
        }
    });
})();