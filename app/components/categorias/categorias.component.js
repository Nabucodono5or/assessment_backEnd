(function () {

  function categoriasController(categoriasService) {

  }

  categoriasController.$inject = [];
  angular.module('categorias').controller( 'categoriasController', categoriasController)

  angular.module('categorias').component('categoriascomp', {
    controller: categoriasController,
    template: ``
  });

})()
