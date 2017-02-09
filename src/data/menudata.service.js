
(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http)
 {
  var service = this;
  var ApiBasePath= "https://davids-restaurant.herokuapp.com";
  service.getAllCategories = function ()
   {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };


  service.getItemsForCategory = function (categoryShortName)
   {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });

    return response;
  };

}


})();
