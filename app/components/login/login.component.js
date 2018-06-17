(function () {

  function loginController(loginService) {

    this.erro = false;
    this.credentialsValidas = false;

    this.login = () => {
      if(this.credentials){

        this.validas = loginService.login(this.credentials);
        if(this.validas){

          this.erro = false;
        }else{
          this.erro = true;
        }
      }    
    }

  }

  loginController.$inject = ['loginService'];

  angular.module('login').controller('loginController', loginController);

  angular.module('login').component('logincomps',{
    controller: loginController,
    template:`
    <div>
    <div class="row margensAltura posicao-mobile">
      <div class="panel panel-primary col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 margin-top">
        <form class="margensSuperExtras" name="userForm" action="" method="post" novalidate>
          <div class="text-warning" ng-show="$ctrl.erro">
            <p>Erro de autenticação</p>
          </div>

          <div class="form-group">
            <label for="identificacao">Login</label><br>
            <input name="identificacao" type="text" ng-model="$ctrl.credentials.login">
          </div>


          <div>
            <label for="senha">Senha</label><br>
            <input name="senha" type="password" ng-model="$ctrl.credentials.senha">
          </div>

          <div class="checkbox">
            <label for="lembrarCheck">
                <input  name="lembrarCheck" type="checkbox" ng-model="$ctrl.lembrar">
                Lembrar login
              </label>
          </div>

        </form>

        <div class="margensExtras">
          <button class="btn btn-primary" ng-click="$ctrl.login()">ACESSAR</button>
        </div>

      </div>
    </div>
    </div>
`,
  });
})();
