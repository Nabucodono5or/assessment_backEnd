(function () {
  function lancamentosController(categoriasService) {
    //ainda para ser testado
    this.adicionarLancamentos = (lancamento) => {
      lancamento.valor = this.valor;
      lancamento.repetitividade = this.repetitividade;
      lancamento.receita = this.receita.nome;
      lancamento.categoria = this.categoria.nome;
    }

    this.carregarCategorias = () => {
      categoriasService.get().then((response) => {
        this.categorias = response.data;
      }, (err) => {
        console.log(err);
      });
    }

    this.$onInit = () => {
      this.carregarCategorias();
      this.receitas = [];
      this.repetitividades = [];
    }


  }

  lancamentosController.$inject = ['categoriasService'];
  angular.module('lancamentos').controller('lancamentosController', lancamentosController)

  angular.module('lancamentos').component('lancamentoscomp', {
    controller: lancamentosController,
    template: `<div>
      <div class="">
        <h3> Adicione lançamentos </h3>
        <form class="" name="lancamentoForm" action="index.html" method="post">

          <div class="">
            <label for="">Nome
              <input type="text" name="nome" ng-model="$ctrl.lancamento.nome">
            </label>
          </div>

          <div class="">
            <label for="">Menssagem
              <textarea name="menssagem" rows="8" cols="80" ng-model="$ctrl.lancamento.menssagem"></textarea>
            </label>
            <!-- menssagem -->
          </div>

          <div class="">
            <label for="">valor
              <input type="text" name="valor" ng-model="$ctrl.valor">
            </label>
          </div>

          <div class="">
            <select class="" name="receita" ng-model="$ctrl.receita" ng-options="receita.nome for receita in $ctrl.receitas">
            </select>
            <!-- select possui receita -->
          </div>

          <div class="">
            <select class="" name="categoria" ng-model="$ctrl.categoria" ng-options="cat.nome for cat in $ctrl.categorias">
            </select>
            <!--select categoria -->
          </div>

          <div class="">
            <select class="" name="repetitividade" ng-model="$ctrl.repetitividade" ng-options="rep for rep in $ctrl.repetitividades">
            </select>
            <!-- select repetitividade -->
          </div>
        </form>
      </div>
    </div>
`
  })

})();
