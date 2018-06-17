(function () {
  function lancamentosController(categoriasService, dashboardService) {
    //ainda para ser testado
    this.adicionarLancamentos = (lancamento) => {//lancamento ou this.lancamento
      this.lancamento.valor = this.valor;
      this.lancamento.repetitividade = this.repetitividade;
      this.lancamento.receita = this.receita.valor;
      this.lancamento.categoria = this.categoria.nome;
      this.lancamento.data = Date.now();

      dashboardService.add(this.lancamento).then((response) => {
        this.addAlert();
        delete this.lancamento; //será que vai dar certo?
        console.log('sucesso');
      }, (err) => {
        console.log(err);
      });
    }

      // codigo para replicar xxxxxxxxxxxxxxxxxxxxxxxxx
      // sucesso yyyyyyyyyyyyyyyyyyyy
      this.alerts = [];

      this.addAlert = () => {
        this.alerts.push({msg: 'Dados salvo com sucesso'});
      };

      this.closeAlert = (index) => {
        this.alerts.splice(index, 1);
      };

      //erros yyyyyyyyyyyyyyyyyyyy
      this.erros = [];

      this.addErros = () => {
        this.erros.push({msg: 'Erro ao salvar os dados'});
      }

      this.closeErros = (index) => {
        this.erros.splice(index, 1);
      }
      // cofigo para replicar xxxxxxxxxxxxxxxxxxxxxxxxxx


    this.carregarCategorias = () => {
      categoriasService.get().then((response) => {
        this.categorias = response.data;
      }, (err) => {
        console.log(err);
      });
    }

    this.$onInit = () => {
      this.carregarCategorias();
      this.receitas = [
        {
          nome: "PAGO",
          valor: true
        },
        {
          nome: "DEVENDO",
          valor: false
        },
      ];

      this.repetitividades = ["semanal", "mensal", "anual", "diária"];

    }

  }

  lancamentosController.$inject = ['categoriasService', 'dashboardService'];
  angular.module('lancamentos').controller('lancamentosController', lancamentosController)

  angular.module('lancamentos').component('lancamentoscomp', {
    controller: lancamentosController,
    template: `<div>
      <div class="panel panel-info margin-top col-sm-8 col-sm-offset-2">
        <h3> Adicione lançamentos </h3>
        <form class="" name="lancamentoForm" action="index.html" method="post">

          <div class="form-group">
            <label for="">Nome
              <input class="form-control" type="text" name="nome" ng-model="$ctrl.lancamento.nome">
            </label>
          </div>

          <div class="form-group">
            <label for="menssagem">Menssagem
              <textarea class="form-control" name="menssagem" rows="8" cols="80" ng-model="$ctrl.lancamento.descricao"></textarea>
            </label>
            <!-- menssagem -->
          </div>

          <div class="form-group">
            <label for="valor">valor
              <input class="form-control" type="text" name="valor" ng-model="$ctrl.valor">
            </label>
          </div>

          <div class="form-group">
            <p>Receita</p>
            <select class="" name="receita" ng-model="$ctrl.receita" ng-options="receita.nome for receita in $ctrl.receitas">
            </select>
            <!-- select possui receita -->
          </div>

          <div class="form-group">
            <p>Categorias</p>
            <select class="" name="categoria" ng-model="$ctrl.categoria" ng-options="cat.nome for cat in $ctrl.categorias">
            </select>
            <!--select categoria -->
          </div>

          <div class="form-group">
            <p>Pagamentos</p>
            <select class="" name="repetitividade" ng-model="$ctrl.repetitividade" ng-options="rep for rep in $ctrl.repetitividades">
            </select>
            <!-- select repetitividade -->
          </div>

          <div class="form-group">
            <label for="parcelas">Parcelas
              <input type="number" name="parcelas" ng-model="$ctrl.lancamento.repeticoes">
            </label>
            <!-- parcelas -->
          </div>
  
        </form>

        <div>
          <button class="btn btn-info margensExtras" ng-click="$ctrl.adicionarLancamentos($ctrl.lancamento)">
            Salvar
          </button>
        </div>

        <div uib-alert ng-repeat="alert in $ctrl.alerts" ng-class="'alert-' + (alert.type || 'success')" close="$ctrl.closeAlert($index)">
          {{alert.msg}}
        </div>

        <div uib-alert ng-repeat="erro in $ctrl.erros" ng-class="'alert-' + (erro.type || 'warning')" close="$ctrl.closeErros($index)">
          {{erro.msg}}
        </div>
        
      </div>
    </div>
`
  });

})();
