(function () {
  angular.module('login', ['ui.router','ngMockE2E']);
})();

(function () {
  angular.module('login').config(function ($stateProvider) {
    
    $stateProvider.state('login', {
      url: '/login',
      component: 'logincomps'
    });

  });
});