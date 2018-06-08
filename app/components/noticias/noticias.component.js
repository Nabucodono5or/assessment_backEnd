(function(){
  function noticiasController(noticiasService) {
    this.carregarDados = () => {
      noticiasService.get().then((response) => {
        this.lista = this.response.data;
      }, (err)=> {
        console.log(err);
      });
    }

    this.carregarDados();
  }

  angular.module('noticias').controller('noticiasController', noticiasController);
  noticiasController.$inject = ['noticiasService'];

  angular.module('noticias').component('noticias',{
    templateUrl: 'app/components/noticias/noticias.html',
    controller: noticiasController
  });
})();
