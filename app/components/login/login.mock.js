(function () {

  angular.module('login').run(logiRun);

  function logiRun($httpBackend) {

    $httpBackend.whenPOST(/\/noticias/).respond(function(method, url, data) {
      if((data) && (data.login == "ceo" && data.senha == "123")){
        return [200, '', {}];
      }else{
        return [401, '', {}];
      }
    });

  }

  /*


  */
})();
