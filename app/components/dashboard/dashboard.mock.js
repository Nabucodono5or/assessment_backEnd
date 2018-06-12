(function () {
  angular.module('dashboard').run(dashboardRun);

  function dashboardRun($httpBackend, dashboardMockService) {
    baseUrl = '/api/lancamentos';

    $httpBackend.whenGET(baseUrl).respond(dashboardMockService.lista);
  }
})();
