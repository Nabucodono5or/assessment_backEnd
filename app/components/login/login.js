(function () {
  angular.module('login', []);
})();

(function () {
  angular.module('login').config(function ($stateProvider) {
    
    $stateProvider.state('login', {
      url: '/login',
      component: 'logincomps'
    });

  });
});