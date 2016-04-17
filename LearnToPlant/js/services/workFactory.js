(function () {
    'use strict';

    var serviceId = 'workFactory';

    angular.module('app').factory(serviceId,
        ['$http', workFactory]);

    function workFactory($http) {

        function getWorkArea(level) {
            return $http({
                url: '/api/Work',
                method: "GET",
                params: { "level": level }
            });
        }

        var service = {
            getWorkArea: getWorkArea
        };

        return service;
    }
})();