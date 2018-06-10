(function () {

  angular.module('form').component('formcomp', {
    bindings: {
      editando: '<',
      noticia: '<',
      onChange: '&',
      out: '&',
    },
    template: `<div class="">
      <form name="noticiaForm" class="form-horizontal" action="index.html" method="post" novalidate>
      <div class="from-group">
        <label for="titulo" class="">Titulo <input type="text" name="titulo" ng-model="$ctrl.noticia.titulo" required> </label> <br>
        <p ng-show="noticiaForm.titulo.$invalid && noticiaForm.titulo.$touched">O título é requerido</p>
      </div>
      <div class="from-group">
        <label for="msg" class=""> Mensagem<textarea name="msg"  cols="30" rows="10" ng-model="$ctrl.noticia.mensagem" required></textarea><br> </label>
        <p ng-show="noticiaForm.msg.$invalid && noticiaForm.msg.$touched">A mensagem é requerida</p>
      </div>
      <div class="from-group">
        <label for="autor" class="">Autor<input type="text" name="autor" ng-model="$ctrl.noticia.autor" required></label>
        <p ng-show="noticiaForm.autor.$invalid && noticiaForm.autor.$touched">O autor é requerido</p>
      </div>
      </form>
      <button class="btn btn-primary" ng-disabled="noticiaForm.$invalid" ng-click="$ctrl.onChange({ $event: {noticia: $ctrl.noticia} })">'
      {{$ctrl.editando ? "Atualizar" : "Adicionar"}}'
      </button>
      <button class="btn btn-warning" ng-disabled="noticiaForm.$invalid" ng-click="$ctrl.out({ $event: {noticia: $ctrl.noticia} })">'
      Deletar'
      </button>
'
    </div>`,
  });

})();
