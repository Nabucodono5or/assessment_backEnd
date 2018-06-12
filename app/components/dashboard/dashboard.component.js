(function () {

  function dashboardController(dashboardService) {
    this.carregarDados() = () => {
      dashboardService.get().then((response) => {
        this.lancamentos = response.data;
      }, (err) => {
        console.log(err);
      });
    }

    this.$onInit = () => {
      this.carregarDados();
    }

  }

  dashboardController.$inject = ['dashboardController'];

  angular.module('dashboard'),controller('dashboardController',dashboardController);
  angular.module('dashboard').component('dashboardcomp', {
    controller : dashboardController,
    template: ''
  })
})();
