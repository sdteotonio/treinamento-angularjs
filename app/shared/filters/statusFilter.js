angular.module("app").filter("status", function () {
  return function (value, param) {
    if (value === 0) {
      return `(${param}) inativo`;
    }
    return `(${param}) ativo`;
  };
});
