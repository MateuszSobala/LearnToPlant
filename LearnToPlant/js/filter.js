 (function () {
    'use strict';

    var filterId = 'trustThisUrl';

    angular.module('app').filter(filterId, ['$sce', function ($sce) {
        return function (val) {
            return $sce.trustAsResourceUrl(val);
        };
    }]);
})();