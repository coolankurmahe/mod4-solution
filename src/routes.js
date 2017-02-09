(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Premade list page  categories
  .state('categories', {
    url: '/category-list',
     templateUrl: 'src/menu/templates/categorylist.template.html',
    // templateUrl: 'src/menu/templates/test.html',
    controller: 'CategoriesListController as categorylist',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categories.items', {
    url: '/item-list/{itemId}',
    templateUrl: 'src/menu/templates/item-detail.template.html',
    controller: "ItemDetailController as itemDetail",
    // resolve: {
    //   itemforcat: ['MenuDataService', function (MenuDataService) {
    //     return MenuDataService.getItemsForCategory(categories[itemId]);
    //   }]
    // }
  });

}

})();
