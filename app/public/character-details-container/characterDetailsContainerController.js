angular
  .module("app")
  .controller("CharacterDetailsController", [
    "$stateParams",
    CharacterDetailsController,
  ]);

function CharacterDetailsController($stateParams) {
  const vm = this;
  vm.characterId = $stateParams.characterId;

  console.log("CharacterDetailsController", vm.characterId);
}
