(function () {
  
  angular.module('tabela').component('tabelacomp', {
    bindings: {
      lancamento: '<'
    },
    template: `
  <div>
      <div>
          <p>Valor: {{$ctrl.lancamento.valor}}</p>
      </div>
      <div>
        <p>Pago : {{ $ctrl.lancamento.receita ? "Sim" : "Não" }} </p>
      </div>
      <div>
        <p>Parcelas: {{ $ctrl.lancamento.repetitividade }}</p>
      </div>
  </div>
`
  });

})();