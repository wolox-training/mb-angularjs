import woloxLogo from './../../assets/img/LogoWolox.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .component('login', {
    template: require('./login.html'),
    controller: ['authService', 'localStorageService', '$state',
      function(authService, localStorageService, $state) {
        this.woloxLogo = woloxLogo;
        this.emailValidation = /^(?!.*\.\.)[^.][^\s@]+[^.]@[^\-][^\s@]+\.[^\s@]{2,}$/;
        this.user = {};

        this.formSubmit = function() {
          authService.login(this.user).then(function(response) {
            localStorageService.set('accessToken', response.headers('access-token'));
            $state.go('books');
          }, function(response) {
            // eslint-disable-next-line no-console
            console.log(response.status);
          });
        };
      }]
  });
