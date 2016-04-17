(function () {
    'use strict';

    var serviceId = 'workFactory';

    angular.module('app').factory(serviceId,
        ['$http', workFactory]);

    function workFactory($http) {

        function getWorkArea() {
            return $http.get('/api/WorkArea/');
        }

        var service = {
            getWorkArea: getWorkArea
        };

        return service;
    }
})();