(function () {

  angular.module('dashboard').service('dashboardService', dashboardService)

  function dashboardService($http) {
    var baseUrl ='/api/lancamentos';

    this.get = () => {
      return $http.get(baseUrl);
    }
  }
})();
