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
        noticiasService.update(this.noticia).then((response) => {
          this.carregarDados();
          console.log('sucesso');
        }, (err) => {
          console.log(err);
        });
      }else{
        noticiasService.add(this.noticia).then((response) => {
          this.carregarDados();
          console.log('sucesso');
        }, (err) => {
          console.log(err);
        });
      }

      delete this.noticia;
      this.editando = false;
    }


    this.onDeleteButtonClicked = () => {
      if(this.noticia){
        noticiasService.remove(this.noticia).then((response) => {
          this.carregarDados();
          console.log('sucesso');
        }, (err) => {
          console.log(err);
        });
        delete this.noticia;
      }
    }

  }

  angular.module('noticias').controller('noticiasController', noticiasController);
  noticiasController.$inject = ['noticiasService'];

  //app/components/noticias/noticias.html
  angular.module('noticias').component('noticiascomp',{
    template: '<div><div ng-repeat="noticia in $ctrl.lista" ng-click="$ctrl.clicouNoticia(noticia)">'+'<p ng-bind="noticia.titulo"></p>'+
    '<p ><span ng-bind="noticia.autor"></span>, <span ng-bind="noticia.data"></span></p>'
    +'<img src="noticia.imagem" alt="imagem">'+'<p ng-bind="noticia.mensagem"></p>'+'</div>'+
    '<label for="">Titulo <input type="text" ng-model="$ctrl.noticia.titulo"> </label> <br>'
    +'<label for=""> Mensagem<textarea name="msg"  cols="30" rows="10" ng-model="$ctrl.noticia.mensagem"></textarea><br> </label>'
    +'<label for="">Autor<input type="text" ng-model="$ctrl.noticia.autor"></label>'
    +'<button ng-click="$ctrl.onButtonClicked()" >'
    +'{{$ctrl.editando ? "Atualizar" : "Adicionar"}}'
    +'</button>'
    +'<button ng-click="$ctrl.onDeleteButtonClicked()">'
    +'{{$ctrl.editando ? "Deletar" : "Deletar Tudo"}}'
    +'</button> '
    +'</div>',
    controller: noticiasController
  });
})();
