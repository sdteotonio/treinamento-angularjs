angular.module("app").factory("Interceptor", ["$q", Interceptor]);
function Interceptor($q) {
  return {
    responseError: (error) => {
      if (error.status === 400) {
        console.log(error);
      } else if (error.status == -1) {
        alert("Servico indisponivel");
      }
      return $q.reject(error);
    },
  };
}
