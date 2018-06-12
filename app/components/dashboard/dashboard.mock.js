(function () {
  angular.module('dashboard').run(dashboardRun);

  function dashboardRun($httpBackend, dashboardMockService) {
    baseUrl = '';

    $httpBackend.whenGET(baseUrl).respond(dashboardMockService.lista);
  }
})();
