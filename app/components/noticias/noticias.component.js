(function(){
  function noticiasController(noticiasService) {
    this.carregarDados = () => {
      noticiasService.get().then((response) => {
        this.lista = response.data;
      }, (err)=> {
        console.log(err);
      });
    }

    this.carregarDados();
  }

  angular.module('noticias').controller('noticiasController', noticiasController);
  noticiasController.$inject = ['noticiasService'];

  //app/components/noticias/noticias.html
  angular.module('noticias').component('noticiascomp',{
    template: '<div ng-repeat="noticia in $ctrl.lista">'+'<p ng-bind="noticia.titulo"></p>'+
    '<p ><span ng-bind="noticia.autor"></span>, <span ng-bind="noticia.data"></span></p>'
    +'<img src="noticia.imagem" alt="imagem">'+'<p ng-bind="noticia.mensagem"></p>'+'</div>',
    controller: noticiasController
  });
})();
