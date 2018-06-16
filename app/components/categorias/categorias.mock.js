(function () {

  angular.module('categorias').run(categoriasRun);

  function categoriasRun($httpBackend, categoriasMockService) {
    baseUrl = '/api/categorias';

    $httpBackend.whenGET(baseUrl).respond(categoriasMockService.lista);

    $httpBackend.whenPOST('/api/categorias').respond(function(method, url, data) {
         var newCategoria = angular.fromJson(data);
         categoriasMockService.lista.push(newCategoria);

        return [200, newCategoria, {}];
    });

  }

})();
