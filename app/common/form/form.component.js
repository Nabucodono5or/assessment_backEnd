(function () {

  angular.module('form').component('formcomp', {
    bindings: {
      editando: '<',
      noticia: '<',
      onChange: '&'
    },
    template: `<div class="">
      <form class="" action="index.html" method="post">
        <label for="">Titulo <input type="text" ng-model="$ctrl.noticia.titulo"> </label> <br>
        <label for=""> Mensagem<textarea name="msg"  cols="30" rows="10" ng-model="$ctrl.noticia.mensagem"></textarea><br> </label>
        <label for="">Autor<input type="text" ng-model="$ctrl.noticia.autor"></label>
      </form>
      <button ng-click="$ctrl.onChange({ $event: {noticia: $ctrl.noticia} })">'
      {{$ctrl.editando ? "Atualizar" : "Adicionar"}}'
      </button>'
    </div>`,
  });

})();
