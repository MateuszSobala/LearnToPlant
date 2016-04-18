(function () {
    'use strict';

    var serviceId = 'actionFactory';

    angular.module('app').factory(serviceId,
        ['$http', actionFactory]);

    function actionFactory($http) {

        function handleAction(plant, action, value) {
            //console.log(data);
            return $http({
                url: '/api/Actions',
                method: "POST",
                dataType: 'json',
                params: { "action": action, "value": value },
                data: { "Plant": JSON.stringify(plant) },
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }

        var service = {
            handleAction: handleAction
        };

        return service;
    }
})();