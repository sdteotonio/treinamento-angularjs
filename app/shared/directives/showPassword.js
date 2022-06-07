angular.module("app").directive("showPassword", function () {
  return function (scope, elem, attrs) {
    scope.$watch(attrs.showPassword, function (show) {
      if (show) {
        elem.attr("type", "text");
      } else {
        elem.attr("type", "password");
      }
    });
  };
});
