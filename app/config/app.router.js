angular.module("app").config([
  "$stateProvider",
  "$urlRouterProvider",
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
      url: "/home",
      templateUrl: "public/home/home.template.html",
    });
    $urlRouterProvider.otherwise("/home");
  },
]);
