(function () {
'use strict';

angular.module('shoppingListModule', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)

    ToBuyController.$inject = ['$scope'];
    function ToBuyController($scope) {
        $scope.ToBuy = this;
    }

    AlreadyBoughtController.$inject = ['$scope'];
    function AlreadyBoughtController($scope) {
        $scope.Bought = this;
    }
})();
