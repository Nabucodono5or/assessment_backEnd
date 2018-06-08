(function () {
  
  //angular.module('noticias').run(noticiasRun);

  function noticiasRun($httpBackend, noticiasMockService) {
    baseUrl = '/api/noticias';
    $httpBackend.whenGET(baseUrl).respond(noticiasMockService.lista);
  }

})();