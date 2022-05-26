angular
  .module("app")
  .controller("HomeController", ["userService", "$state", HomeController]);

function HomeController(userService, $state) {
  const vm = this;
  vm.users = [];
  userService.getUsers().then((response) => {
    vm.users = response.data;
  });

  vm.login = () => {
    $state.go("login");
  };
}
