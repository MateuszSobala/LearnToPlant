(function () {
    'use strict';

    var serviceId = 'imageFactory';

    angular.module('app').factory(serviceId,
        ['$http', imageFactory]);

    function imageFactory($http) {

        function getImages(level, component) {
            return $http({
                url: '/api/Images',
                method: "GET",
                params: { "level": level, "component": component  }
            });
        }

        var service = {
            getImages: getImages
        };

        return service;
    }
})();