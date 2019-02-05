(function() {

  "use strict";

  angular.module("MenuApp")
         .config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url:          "/",
        templateUrl:  "home/home.template.html"
      })
      .state("categories", {
        url:          "/categories",
        templateUrl:  "categories/categories-list.template.html",
        controller:   "CategoriesListController as ctrl",
        resolve: {
          
          categories: [ "MenuDataService", function(MenuDataService) {

            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state("categories.items", {
        url:          "/items/{categoryShortName}",
        templateUrl:  "categories/items-list.template.html",
        controller:   "ItemsListController as ctrl",
        params:       { categoryShortName: null },
        resolve: {

          items: [ "$stateParams", "MenuDataService", function($stateParams, MenuDataService) {

            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
  }
})();