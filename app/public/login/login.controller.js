angular
  .module("app")
  .controller("LoginController", ["userService", "$state", LoginController]);
function LoginController(userService, $state) {
  const vm = this;
  vm.users = [];
  userService.getUsers().then((response) => {
    vm.users = response.data;
  });

  vm.home = () => {
    $state.go("home");
  };
}
