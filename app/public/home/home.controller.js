angular
  .module("app")
  .controller("HomeController", ["CharactersService", HomeController]);

function HomeController(charactersService) {
  const vm = this;
  vm.characters = [];
  vm.searchName = "";

  vm.getCharacters = () => {
    charactersService
      .getAllCharacters(vm.searchName)
      .then((response) => {
        vm.characters = response.data.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
