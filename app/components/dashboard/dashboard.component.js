(function () {

  function dashboardController(dashboardService) {
    this.carregarDados = () => {
      dashboardService.get().then((response) => {
        this.lancamentos = response.data;
      }, (err) => {
        console.log(err);
      });
    }

    this.$onInit = () => {
      this.carregarDados();
    }

  }

  dashboardController.$inject = ['dashboardService'];

  angular.module('dashboard').controller('dashboardController',dashboardController);

  angular.module('dashboard').component('dashboardcomp', {
    controller : dashboardController,
    template: `
    <div>
      <div ng-repeat = "lancamento in $ctrl.lancamentos">
        <p ng-model=lancamento.nome></p>
      </div>
    </div>`
  })
})();
