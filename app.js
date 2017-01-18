(function () {
'use strict';

angular.module('shoppingListModule', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListService', ShoppingListService)

    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService) {
        var ToBuy = this;

        ToBuy.Items = ShoppingListService.getItemsToBuy();
        ToBuy.Click = function(index) {
            console.log('click' + ' ' + index);
            ShoppingListService.MarkAsBought(index);
            ToBuy.Items = ShoppingListService.getItemsToBuy();
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService) {
        var Bought = this;

        Bought.Items = ShoppingListService.getBoughtItems();
    }

    function ShoppingListService() {
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
