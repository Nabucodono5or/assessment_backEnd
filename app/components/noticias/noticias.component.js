(function(){
  function noticiasController(noticiasService, $timeout) {
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
      this.alert = false;
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

    //
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
          this.alert = true;
          $timeout( () => {
            this.alert = false;
          }, 2000);
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
  noticiasController.$inject = ['noticiasService', '$timeout'];

  angular.module('noticias').component('noticiascomp',{
    template: '<div><div ng-repeat="noticia in $ctrl.lista" ng-click="$ctrl.clicouNoticia(noticia)">'+'<listacomp noticia="noticia"></listacomp>'+'</div>'+
    '<formcomp noticia="$ctrl.noticia" editando="$ctrl.editando" on-change="$ctrl.change($event)" out="$ctrl.changeDeletar($event)"></formcomp>'
    +'<div ng-show="$ctrl.alert"> <p>Preencha os campos</p> </div>'+'</div>',
    controller: noticiasController
  });
})();
