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
      this.lancamento = {};
      this.exibir = false;
      this.carregarDados();
      this.filtroReceita = [true, false];
    }

    this.exibirDados = (lancamento) => {
      this.exibir = true;
      this.lancamento = lancamento;
    }

  }

  dashboardController.$inject = ['dashboardService'];

  angular.module('dashboard').controller('dashboardController',dashboardController);

  angular.module('dashboard').component('dashboardcomp', {
    controller : dashboardController,
    template: `
    <div>
    <div>
      <select ng-model="selectReceita" ng-options="item for item in $ctrl.filtroReceita"></select>
    </div>
    <div ng-repeat = "lancamento in $ctrl.lancamentos | filter: selectReceita">
      <div ng-click="$ctrl.exibirDados(lancamento)">
        <div>
          <p>{{ lancamento.nome }} <span>{{ lancamento.categoria }}</span> </p>
        </div>
        <div>
          <p>{{ lancamento.data | date }}</p>
          <p>Decrição: {{ lancamento.descricao }}</p>
        </div>
      </div>
    </div>
    <div ng-show="$ctrl.exibir">
    <tabelacomp lancamento="$ctrl.lancamento"></tabelacomp>
    </div>
  </div>`
  })
})();
