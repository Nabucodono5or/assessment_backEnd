(function () {

  function loginController(loginService) {

    this.erro = false;
    this.credentials = {
      login: '',
      senha: '',
    }

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
      <form name="userForm" action="" method="post" novalidate>
        <div ng-show = $ctrl.erro>
          <p>Erro de autenticação</p>
        </div>
        <div>
          <label for="identificacao">Login</label>
        </div>

        <div>
          <input name="identificacao" type="text" ng-model="$ctrl.credentials.login">
        </div>


        <div>
          <label for="senha">Senha</label>
        </div>

        <div>
          <input name="senha" type="password" ng-model="$ctrl.credentials.senha">
        </div>


        <div>
          <label for="lembrarCheck">
              <input name="lembrarCheck" type="checkbox" ng-model="$ctrl.lembrar">
              Lembrar login
            </label>
        </div>


        <div>
          <button type="submit" ng-click="$ctrl.login(credentials)">ACESSAR</button>
        </div>
      </form>
    </div>
`,
  });
})();
