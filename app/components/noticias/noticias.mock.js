(function () {
  
  angular.module('noticias').run(noticiasRun);

  function noticiasRun($httpBackend, noticiasMockService) {
    baseUrl = '/api/noticias';
    $httpBackend.whenGET(baseUrl).respond(noticiasMockService.lista);
  
    $httpBackend.whenPOST('/api/noticias').respond(204, '');

    $httpBackend.whenDELETE('/api/noticias'+'\d+').respond(204, '')
  }

})();