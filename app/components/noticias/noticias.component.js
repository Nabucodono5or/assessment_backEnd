(function(){
  function noticiasController() {
  
  }

  //angular.module('noticias').controller('noticiasController', noticiasController);
  //noticiasController.$inject = ['noticiasService'];

  angular.module('noticias').component('noticias',{
    templateUrl: 'app/components/noticias/noticias.html',
    //controller: noticiasController,
  });
})();