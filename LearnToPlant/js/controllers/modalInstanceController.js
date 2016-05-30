(function () {
    'use strict';

    var controllerId = 'modalInstanceController';

    angular.module('app').controller(controllerId, ['$scope', '$uibModalInstance', 'item', modalInstanceController]);
        
    function modalInstanceController($scope, $uibModalInstance, item) {
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
    }
})();
