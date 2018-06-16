(function () {
  angular.module('categorias').service('categoriasService', categoriasService);

  function categoriasService($http) {
    var baseUrl = '/api/categorias';

    this.add =  (cat) => {
      return $http.post(baseUrl, cat);
    }

    this.get =  () => {
      return $http.get(baseUrl);
    }

  }

})();
