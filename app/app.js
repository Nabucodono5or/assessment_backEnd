(function () {

  angular.module('myApp', ['componentes', 'common', 'ui.router','ui.bootstrap', 'ngAnimate']);

})();

(function () {

  angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {
    "ngInject";

    $urlRouterProvider.otherwise('/noticias');

    $stateProvider.state('noticias', {
      url: '/noticias',
      component: 'noticiascomp'
    }).state('login', {
      url: '/login',
      component: 'logincomps'
    });

  });

})();
