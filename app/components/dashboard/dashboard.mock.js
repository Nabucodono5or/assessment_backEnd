(function () {
  angular.module('dashboard').run(dashboardRun);

  function dashboardRun($httpBackend, dashboardMockService) {
    baseUrl = '/api/lancamentos';

    $httpBackend.whenGET(baseUrl).respond(dashboardMockService.lista);

    $httpBackend.whenPOST('/api/lancamentos').respond(function(method, url, data) {
         var newLancamento = angular.fromJson(data);
         console.log(newLancamento);
         dashboardMockService.lista.push(newLancamento);

        return [200, newLancamento, {}];
    });

  }
})();
