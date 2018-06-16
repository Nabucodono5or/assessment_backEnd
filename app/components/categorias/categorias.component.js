(function () {

  function categoriasController(categoriasService) {

  }

  categoriasController.$inject = [];
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
              <input class="margensExtras" type="text" name="buscarcategorias" value="">
            </label>
          </div>

          <div class="panel panel-default">
            <p></p>
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
        <form class="" action="index.html" method="post">
          <div class="form-group margensExtras">
            <label for="nome">Nome da categoria
              <input class="form-control" type="text" name="nome" value="">
            </label>
          </div>

          <div class="form-group margensExtras">
            <label for="desc">Descição da categoria
              <textarea class="form-control" name="desc" rows="8" cols="80"></textarea>
            </label>
          </div>
        </form>

        <button class="btn btn-info margensExtras" type="button" name="salvar">Salvar</button>
      </div>

      </div>
    </div>
`
  });

})()
