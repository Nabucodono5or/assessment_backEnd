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

    this.change = ($event) => {
      this.noticia = $event.noticia;
      console.log('evento ativado');
      this.onButtonClicked();
    }

    this.changeDeletar = ($event) => {
      this.onDeleteButtonClicked();
      console.log('evento ativado');
    }

    // os botões talvez sejam substituídos
    this.onButtonClicked = () => {
      if(this.editando){
        noticiasService.update(this.noticia).then((response) => {
          this.carregarDados();
          console.log('sucesso');
        }, (err) => {
          console.log(err);
        });
      }else{
        if(!this.noticia){
          alert('Preencha o campo');
          return
        }
        this.noticia.id = this.lista.length+1;
        this.noticia.data = Date.now();
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

  angular.module('noticias').component('noticiascomp',{
    template: '<div><div ng-repeat="noticia in $ctrl.lista" ng-click="$ctrl.clicouNoticia(noticia)">'+'<p ng-bind="noticia.titulo"></p>'+
    '<p ><span ng-bind="noticia.autor"></span>, <span>' + '{{ noticia.data | date }}'+' </span></p>'
    +'<img src="noticia.imagem" alt="imagem">'+'<p ng-bind="noticia.mensagem"></p>'+'</div>'+
    '<formcomp noticia="$ctrl.noticia" editando="$ctrl.editando" on-change="$ctrl.change($event)" out="$ctrl.changeDeletar($event)"></formcomp>'+'</div>',
    controller: noticiasController
  });
})();
