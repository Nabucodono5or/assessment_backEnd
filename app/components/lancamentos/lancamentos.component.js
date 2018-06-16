(function () {
  function lancamentosController() {

  }

  lancamentosController.$inject = [];
  angular.module('lancamentos').controller('lancamentosController', lancamentosController)

  angular.module('lancamentos').component('lancamentoscomp', {
    controller: lancamentosController,
    template: ``
  })

})();
