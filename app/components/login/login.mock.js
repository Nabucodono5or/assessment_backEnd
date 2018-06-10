(function () {

  angular.module('login').run(logiRun);

  function logiRun($httpBackend) {

    //mockar?
    $httpBackend.whenPOST('/login').respond(function(method, url, data) {
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
