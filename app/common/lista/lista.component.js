(function () {
  angular.module('lista').component('listacomp', {
    bindings: {
      noticia: '<'
    },
    template: `<p ng-bind="$ctrl.noticia.titulo"></p>
    <p ><span ng-bind="$ctrl.noticia.autor"></span> <span>  {{ $ctrl.noticia.data | date }} </span></p>
    <img src="$ctrl.noticia.imagem" alt="imagem"><p ng-bind="$ctrl.noticia.mensagem"></p>`
  });
})();
