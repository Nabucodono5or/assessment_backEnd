(function () {
//<noticiascomp></noticiascomp>
// app/app.html
angular.module('myApp').component('app', {
  template: `
  <navbarcomp></navbarcomp>
  <ui-view></ui-view>
  `,
});

})();
