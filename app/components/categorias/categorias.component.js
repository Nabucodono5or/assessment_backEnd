(function () {

  function categoriasController(categoriasService) {

    this.carregarCategorias = () => {
      categoriasService.get().then((response) => {
        this.categorias = response.data;
      }, (err) => {
        console.log(err);
      });
    }

    this.adicionarCategorias = (categoria) => {
      this.categoria.id = this.categorias.length+1;
      categoriasService.add(categoria).then((response) => {
      this.carregarCategorias();
      delete this.categoria;

      }, (err) => {
        console.log(err);
      });
    }

    this.$onInit = () => {
      this.carregarCategorias();
    }


  }

  categoriasController.$inject = ['categoriasService'];
  angular.module('categorias').controller( 'categoriasController', categoriasController)

  angular.module('categorias').component('categoriascomp', {
    controller: categoriasController,
    template: `<div class="margensExtras">
      <div class="row">
        <div class="margin-top panel panel-info col-sm-8 col-sm-offset-2">
          <h3>Busque uma categoria</h3>
          <form class="" action="index.html" method="post">
          <div class="form-group">
            <label for="buscarcategorias">Buscar categorias
              <input class="margensExtras" type="text" name="buscarcategorias" value="" ng-model="buscaCat">
            </label>
          </div>

          <div class="panel panel-default" ng-repeat="categoria in $ctrl.categorias | filter:buscaCat track by $index">
            <p>{{ categoria.nome }}</p>
          </div>

          <div class="">
            <button class="btn btn-info margensExtras" type="button" name="buscar">Buscar</button>
          </div>
          </form>
        </div>
      </div>
      <div class="row">
      <div class="panel panel-info col-sm-8 col-sm-offset-2">
        <h3>Cadastre uma nova categoria</h3>
        <form class="" name="categoriaForm" action="index.html" method="post" novalidate>
          <div class="form-group margensExtras">
            <label for="nome">Nome da categoria
              <input ng-model="$ctrl.categoria.nome" class="form-control" type="text" name="nome" required>
            </label>
          </div>

          <div class="form-group margensExtras">
            <label for="desc">Descição da categoria
              <textarea class="form-control" name="desc" rows="8" cols="80" ng-model="$ctrl.categoria.descricao" required></textarea>
            </label>
          </div>
        </form>

        <button class="btn btn-info margensExtras" type="button" name="salvar" ng-disabled="categoriaForm.$invalid" ng-click="$ctrl.adicionarCategorias($ctrl.categoria)" >Salvar</button>
      </div>

      </div>
    </div>
`
  });

})()
