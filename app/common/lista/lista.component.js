(function () {
  angular.module('lista').component('listacomp', {
    bindings: {
      noticia: '<'
    },
    template: `
    <div class="row">
      <div class="panel panel-default semPadding col-sm-10 col-sm-offset-1 margin-top">
        <p class="text-titulo panel-heading" ng-bind="$ctrl.noticia.titulo"></p>
        <div class="panel-body">
          <p ><span class="text-titulo" ng-bind="$ctrl.noticia.autor"></span>, <span class="text-data">  {{ $ctrl.noticia.data | date }} </span></p>
          <img ng-src="{{ $ctrl.noticia.imagem }}" alt="imagem" class="flutuarEsquerda"><p ng-bind="$ctrl.noticia.mensagem"></p>
        </div>
      </div>
    </div>`
  });
})();
