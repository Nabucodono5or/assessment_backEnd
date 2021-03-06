(function () {

  /*
  function navbarControler(loginService){
    this.exibirPaginas = loginService.sessao_usuario;

    this.sairLogin = loginService.sessao_usuario = false;
  }
  
  */

  //navbarControler.$inject = ['loginService'];
  //angular.module('navbar').controller('navbarControler', navbarControler);

  angular.module('navbar').component('navbarcomp',{
    template: `<nav class="navbar navbar-default navbar-static-top navbar-fixed-top main-navigation"
         tooltip-placement="bottom-left"
         uib-tooltip="Barra principal" ng-init="$ctrl.isNavBarCollapsed = true">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button"
                  class="navbar-toggle collapsed"
                  ng-click="$ctrl.isNavBarCollapsed = !$ctrl.isNavBarCollapsed">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

        </div>
        <div id="navbar"
             class="navbar-collapse collapse"
             uib-collapse="$ctrl.isNavBarCollapsed">
          <ul class="nav navbar-nav">
            <li ui-sref-active="active"><a ui-sref="noticias" class="text-titulo">Noticias</a></li>
            <li ui-sref-active="active"><a class="text-titulo" ui-sref="login">Login</a></li>
            <li ui-sref-active="active"><a class="text-titulo" ui-sref="dashboard">Dashboard</a></li>
            <li ui-sref-active="active"><a ui-sref="lancamentos" class="text-titulo">Lançamentos</a></li>
            <li ui-sref-active="active"><a ui-sref="categorias" class="text-titulo">Categorias</a></li>
          </ul>
        </div>
      </div>
    </nav>
`
  });
})();
