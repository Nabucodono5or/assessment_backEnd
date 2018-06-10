(function () {

  angular.module('login').service('loginService', loginService);

  function loginService ($http) {

    this.login = function (msCredentials) {
      return $http.post('/login', msCredentials);
    }

  }
})();
