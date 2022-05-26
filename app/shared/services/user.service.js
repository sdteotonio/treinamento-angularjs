angular.module("app").service("userService", function (env, $http) {
  this.getUsers = () => {
    return $http.get(`${env.apiUrl}/users`);
  };
});
