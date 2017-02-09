(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['MenuDataService','$stateParams', 'categories'];
function ItemDetailController(MenuDataService,$stateParams, categories) {
  var itemDetail = this;
  var categorieslist = categories.data;
  var catitem = categorieslist[$stateParams.itemId];

  //  console.log(catitem);
var itemsforcat;
  var promise = MenuDataService.getItemsForCategory(catitem.short_name);
   promise.then(function (response) {
  //    console.log(response.data);
      itemDetail.menuItems = response.data.menu_items;

    })
    .catch(function (error) {
      console.log(error);
    })


  // itemDetail.menuItems = itemsforcatdata.menu_items;

//   itemDetail.name = item.name;
//   itemDetail.quantity = item.quantity;
//   itemDetail.description = item.description;
 }

})();
