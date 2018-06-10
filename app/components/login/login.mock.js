(function () {
  
  angular.module('login').run(logiRun);

  function logiRun($httpBackend) {
    //mockar?
    $httpBackend.whenPOST('/api/noticias', msCredentials).respond(function(method, url, data) {
      if(msCredentials.login == "" && msCredentials.senha == ""){
        return [200, '', {}];
      }else{
        return [401, '', {}];
      }
    });
  }
})();