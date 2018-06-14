(function () {

  angular.module('form').component('formcomp', {
    bindings: {
      editando: '<',
      noticia: '<',
      onChange: '&',
      out: '&',
    },
    template: `
    <div class="row margensAltura margensAbaixo panel-bg-form padding-extra posicao-mobile">
      <div class="panel panel-default col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
        <h3>Adicione noticias ou as edite como quiser:</h3>
        <form name="noticiaForm" class="form-horizontal margensExtras" action="index.html" method="post" novalidate>
            <div class="from-group">
              <label for="titulo" class="">Titulo <input type="text" class="form-control" name="titulo" ng-model="$ctrl.noticia.titulo" required> </label>
              <p ng-show="noticiaForm.titulo.$invalid && noticiaForm.titulo.$touched" class="text-warning">O título é requerido</p>
            </div>
            <div class="from-group">
              <label for="autor" class="">Autor<input type="text" class="form-control" name="autor" ng-model="$ctrl.noticia.autor" required></label>
              <p ng-show="noticiaForm.autor.$invalid && noticiaForm.autor.$touched" class="text-warning">O autor é requerido</p>
            </div>
            <div class="from-group">
              <label for="msg"> Mensagem<textarea name="msg" class="form-control" cols="30" rows="10" ng-model="$ctrl.noticia.mensagem" required></textarea> </label>
              <p ng-show="noticiaForm.msg.$invalid && noticiaForm.msg.$touched" class="text-warning">A mensagem é requerida</p>
            </div>
        </form>
        <button class="btn btn-primary margensExtras" ng-disabled="noticiaForm.$invalid" ng-click="$ctrl.onChange({ $event: {noticia: $ctrl.noticia} })">'
          {{$ctrl.editando ? "Atualizar" : "Adicionar"}}'
        </button>
        <button class="btn btn-warning" ng-disabled="noticiaForm.$invalid" ng-click="$ctrl.out({ $event: {noticia: $ctrl.noticia} })">'
          Deletar
        </button>
      </div>
    </div>`,
  });

})();
