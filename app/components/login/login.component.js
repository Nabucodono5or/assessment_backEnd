(function () {

  function loginController(loginService) {

    this.erro = false;

    this.login = (credentials) => {
      loginService.login(credentials).then((response)=>{
        console.log('sucesso');
      }, (err) => {
        this.erro = true;
        console.log("erro");
      });
    }
  }

  loginController.$inject = ['loginService'];

  angular.module('login').controller('loginController', loginController);

  angular.module('login').component('logincomps',{
    controller: loginController,
    template:`<div>
      <div class="panel panel-primary">
        <form name="userForm" action="" method="post" novalidate>
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

          <div>
            <button class="btn btn-primary" type="submit" ng-click="$ctrl.login(credentials)">ACESSAR</button>
          </div>
        </form>
      </div>  
    </div>
`,
  });
})();
