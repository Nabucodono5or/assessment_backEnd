(function(){
  function noticiasController(noticiasService) {
    this.carregarDados = () => {
      noticiasService.get().then((response) => {
        this.lista = response.data;
      }, (err)=> {
        console.log(err);
      });
    }

    this.$onInit = () => {
      this.editando = false;
      this.carregarDados();
    }

    this.clicouNoticia = (noticia) => {
      console.log('clicou');
      this.noticia = noticia;
      this.editando = true;
    }

    this.onButtonClicked = () => {
      if(this.editando){
        noticiasService.update(this.noticia);
      }else{
        noticiasService.add(this.noticia);
      }

      delete this.noticia;
      this.editando = false;
    }

  }

  angular.module('noticias').controller('noticiasController', noticiasController);
  noticiasController.$inject = ['noticiasService'];

  //app/components/noticias/noticias.html
  angular.module('noticias').component('noticiascomp',{
    template: '<div><div ng-repeat="noticia in $ctrl.lista" ng-click="$ctrl.clicouNoticia(noticia)">'+'<p ng-bind="noticia.titulo"></p>'+
    '<p ><span ng-bind="noticia.autor"></span>, <span ng-bind="noticia.data"></span></p>'
    +'<img src="noticia.imagem" alt="imagem">'+'<p ng-bind="noticia.mensagem"></p>'+'</div>'+'</div>',
    controller: noticiasController
  });
})();
