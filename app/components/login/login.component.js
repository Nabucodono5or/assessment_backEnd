(function () {

  function loginController(loginService) {

    this.credentials = {
      login: '',
      senha: '',
    }

    this.login = (credentials) => {
      loginService.login(credentials).then((response)=>{
        console.log('sucesso');
      }, (err) => {
        console.log(err);
      });
    }
  }

  loginController.$inject = ['loginService'];

  angular.module('login').controller('loginController', loginController);

  angular.module('login').component('logincomps',{
    controller: '',
    template:``,
  });
})();