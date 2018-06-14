(function () {

  function dashboardController(dashboardService) {
    this.carregarDados = () => {
      dashboardService.get().then((response) => {
        this.lancamentos = response.data;
      }, (err) => {
        console.log(err);
      });
    }


    this.dateFilter = (lancamento) => {
      var d = new Date(lancamento.data);

      if(this.selectMes){
        if(this.selectMes.valor == 12){ return true };

        if(d.getMonth() == this.selectMes.valor) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    }

    this.$onInit = () => {
      this.listaAtual = this.lancamentos;
      this.lancamento = {};
      this.exibir = false;
      this.carregarDados();
      this.filtroReceita = [{nome: "Pago", valor: true}, { nome: "Devendo", valor: false}];
      this.filtroMes = [{nome: "Todos", valor: 12},
                        {nome: "Janeiro", valor: 0 },
                        {nome: "Fevereiro", valor: 1 },
                        {nome: "Março", valor: 2 },
                        {nome: "Abril", valor: 3 },
                        {nome: "Maio", valor: 4 },
                        {nome: "Junho", valor: 5 },
                        {nome: "Julho", valor: 6 },
                        {nome: "Agosto", valor: 7 },
                        {nome: "Setembro", valor: 8 },
                        {nome: "Outubro", valor: 9 },
                        {nome: "Novembro", valor: 10},
                        {nome: "Dezembro", valor: 11}];
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
    <div class="margensSuperExtras">
      <div class="row posicao-mobile margin-top">
        <div class= "panel panel-default panel-bg col-sm-5 col-xs-11">
          <select class="margensExtras" ng-model="selectReceita" ng-options="item.nome for item in $ctrl.filtroReceita"></select>
          <select class="margensExtras" ng-model="$ctrl.selectMes" ng-options="mes.nome for mes in $ctrl.filtroMes" ng-change="$ctrl.calculoTotalGasto()"></select>
        </div>
      </div>

      <div class="row">
      <div class="col-sm-5 col-xs-12">
      <div class="" ng-repeat ="lancamento in $ctrl.lancamentos | filter: { receita: selectReceita.valor } | filter: $ctrl.dateFilter ">
        <div class="panel panel-info panel-bg" uib-popover="{{ lancamento.nome }}" ng-click="$ctrl.exibirDados(lancamento)">
          <div class="">
            <p class="text-titulo">{{ lancamento.nome }} <span class="text-subtitulo">{{ lancamento.categoria }}</span> </p>
          </div>
          <div>
            <p class="text-data">{{ lancamento.data | date }}</p>
            <p class="text-desc">Decrição: {{ lancamento.descricao }}</p>
          </div>
        </div>

      </div>

      </div>
      <div class="row">
        <div class="panel panel-default panel-bg-extra margensExtras col-sm-5 col-xs-10" ng-show="$ctrl.exibir">
        <tabelacomp lancamento="$ctrl.lancamento"></tabelacomp>
      </div>
      </div>

      </div>
  </div>`
  })
})();
