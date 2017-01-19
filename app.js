(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var ToBuy = this;

        ToBuy.Items = ShoppingListCheckOffService.getItemsToBuy();

        ToBuy.Click = function (index) {
            ShoppingListCheckOffService.MarkAsBought(index);
        }

        ToBuy.isListEmpty = function () {
            if (ShoppingListCheckOffService.getItemsToBuy().length > 0)
                return false;
            else
                return true;
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var Bought = this;

        Bought.Items = ShoppingListCheckOffService.getBoughtItems();
        Bought.isListEmpty = function () {
            if (ShoppingListCheckOffService.getBoughtItems().length > 0)
                return false;
            else
                return true;
        }
    }

    function ShoppingListCheckOffService() {
        var service = this;
        // List of shopping items
        var itemsToBuy = [{name: 'Cookies', quantity: 10},
            {name: 'Donuts', quantity: 15},
            {name: 'Chips', quantity: 3},
            {name: 'Bounty', quantity: 8},
            {name: 'Milk', quantity: 2}
            ];

        var boughtItems = [];

        service.getItemsToBuy = function () {
            return itemsToBuy;
        }

        service.getBoughtItems = function () {
            return boughtItems;
        }
        service.MarkAsBought = function(index) {
           var item = itemsToBuy[index];
           boughtItems.push(item);
           itemsToBuy.splice(index, 1);
        }
    };
})();
