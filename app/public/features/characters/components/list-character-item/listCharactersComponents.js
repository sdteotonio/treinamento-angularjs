angular.module("app").component("listCharacterItem", {
  bindings: {
    character: "<",
  },
  template: `
        <div class="panel panel-primary">
          <div class="panel-heading">{{ctrl.character.name}}</div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-4">
                <img class="character-image"
                  src="{{ctrl.character.thumbnail.path}}/standard_xlarge.jpg">
              </div>
              <div class="col-md-8">
                <p>
                  {{ctrl.character.description ||  'Não há descrição para o personagem'}}
                </p>
              </div>
            </div>

          </div>
        </div>
  `,
  controller: function () {},
  controllerAs: "ctrl",
});
