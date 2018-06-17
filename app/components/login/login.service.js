(function () {

  angular.module('login').service('loginService', loginService);

  function loginService ($http) {

    var sessao_usuario = false;

    this.login = (credentials) => {
      if( (credentials.login == "ceo") && (credentials.senha == "123") ){
        sessao_usuario = true;
        return true;
      }else{
        return false;
      }
    }
    
    /*
    this.login = function (msCredentials) {
      return $http.post('/login', msCredentials);
    }
    
    */

  }
})();
