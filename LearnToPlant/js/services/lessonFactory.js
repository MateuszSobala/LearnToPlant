(function () {
    'use strict';

    var serviceId = 'lessonFactory';

    angular.module('app').factory(serviceId,
        ['$http', lessonFactory]);

    function lessonFactory($http) {

        function loadLesson(subject) {
            return $http({
                url: '/api/Lessons',
                method: "GET",
                params: { "subject": subject }
            });
        }

        var service = {
            loadLesson: loadLesson
        };

        return service;
    }
})();