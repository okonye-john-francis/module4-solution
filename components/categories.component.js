(function() {
  
  "use strict";
  
  angular.module("MenuApp")
    .component("categories", {
      templateUrl: "components/categories.template.html",
      bindings: {
        items: "<"
      }
    });

})();