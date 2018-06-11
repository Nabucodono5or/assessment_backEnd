(function () {
  angular.module('lista').component('listacomp', {
    bindings: {
      noticia: '<'
    },
    template: `
    <div class="panel panel-default">
      <p class="panel-heading" ng-bind="$ctrl.noticia.titulo"></p>
      <div class="panel-body">
        <p ><span ng-bind="$ctrl.noticia.autor"></span> <span>  {{ $ctrl.noticia.data | date }} </span></p>
        <img ng-src="{{ $ctrl.noticia.imagem }}" alt="imagem"><p ng-bind="$ctrl.noticia.mensagem"></p>
      </div>
    </div>`
  });
})();
