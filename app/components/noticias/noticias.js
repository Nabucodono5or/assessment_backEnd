(function(){
  angular.module('noticias',['ui.router']);
})();

(function(){

  angular.module('noticias').config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/noticias');

    $stateProvider.state('noticias', {
      url: '/noticias',
      component: 'noticias'
    });

  });

})();