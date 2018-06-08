(function(){
  function noticiasController(noticiasService) {

    //carregar todas as noticias
    this.carregarDados = () => {
      noticiasService.get().then((response) => {
        this.noticias = response.data;
      }, (err) => {
        console.log(err);
      });
    }
    
    //deletar noticia
    this.deletar = (noticia) => {
      noticiasService.remove(noticia).then(() => {
        this.carregarDados();
        console.log('sucesso');
      }, (err) =>{
        console.log(err);
      });
    }

    //adicionar noticia
    this.add = () => {
      let noticia = {
      }

      noticiasService.add(noticia).then(()=>{
        this.carregarDados();
        console.log('sucesso');
      }, (err)=>{
        console.log(err);
      });
    }

  
  }

  angular.module('noticias').controller('noticiasController', noticiasController);
  noticiasController.$inject = ['noticiasService'];

  angular.module('noticias').component('noticias',{
    templateUrl: 'app/components/noticias/noticias.html',
    controller: [ noticiasController]
  })
})();