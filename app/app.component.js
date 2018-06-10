(function () {
//<noticiascomp></noticiascomp>
// app/app.html
angular.module('myApp').component('app', {
  template: `
  <div class="container">
  <navbarcomp></navbarcomp>
  <ui-view></ui-view>
  </div>`,
});

})();
