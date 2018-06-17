(function () {

  angular.module('noticias').run(noticiasRun);

  function noticiasRun($httpBackend, noticiasMockService) {
    baseUrl = '/api/noticias';
    $httpBackend.whenGET(baseUrl).respond(noticiasMockService.lista);

    $httpBackend.whenPOST('/api/noticias').respond(function(method, url, data) {
         var newNoticia = angular.fromJson(data);
         noticiasMockService.lista.push(newNoticia);

        return [200, newNoticia, {}];
    });

    $httpBackend.whenDELETE('/api/noticias').respond(function(method, url, data) {
      return [200, '', {}];
    });

    $httpBackend.whenPUT(/\/noticias\/(\d+)/).respond(function(method, url, data) {
      var newNoticia = angular.fromJson(data);
      console.log(newNoticia);
      let i = this.encontreDadosPorId(newNoticia.id);
      noticiasMockService.lista[i] = newNoticia;
      return [200, '', {}];
    });


    this.encontreDadosPorId = (id) => {
      var listaPercorrida = noticiasMockService.lista;

      for(i = 0; i < listaPercorrida.length; i++){
        if(listaPercorrida.id == id){
          return i;
        }
      }
    }


  }

})();
