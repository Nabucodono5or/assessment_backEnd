(function () {
  
  //angular.module('noticias').service('noticiasService', noticiasService);

  function noticiasService($q,$http){
    vm = this;
    var baseUrl = '/api/noticias';

    //para inserir
    this.add =  (noticia) => {
      return $http.post(baseUrl, noticia);
    }

    //para remover
    this.remove = (noticia) => {
      return $http.delete(baseUrl+'/'+ noticia.id);
    }

    //base de entrada
    this.get =  () => {
      return $http.get(baseUrl);
    }
    
  }


})();