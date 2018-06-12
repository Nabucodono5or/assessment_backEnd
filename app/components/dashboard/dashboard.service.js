(function () {

  angular.module('dashboard').service('dashboardService', dashboardService)

  function dashboardService($http) {
    var baseUrl ='';

    this.get = () => {
      return $http.get(baseUrl);
    }
  }
})();
