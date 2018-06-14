(function () {

  angular.module('noticias').service('noticiasService', noticiasService);

  function noticiasService($q,$http){
    vm = this;
    var baseUrl = '/api/noticias';

    //para inserir
    this.add =  (noticia) => {
      return $http.post(baseUrl, noticia);
    }

    //para remover
    this.remove = (noticia) => {
      console.log(noticia.id);
      return $http.delete(baseUrl, noticia);
    }

    //base de entrada
    this.get =  () => {
      return $http.get(baseUrl);
    }

    this.update = (noticia) => {
      return $http.put(baseUrl+'/'+noticia.id, noticia);
    }

  }


})();
