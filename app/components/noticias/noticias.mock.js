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

    $httpBackend.whenPUT(/\/noticias\/(\d+)/).respond(204, '');
  }

})();
