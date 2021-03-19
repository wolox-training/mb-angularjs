import woloxLogo from './../../assets/img/LogoWolox.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .component('signup', {
    template: require('./signup.html'),
    controller: ['authService', '$state', function(authService, $state) {
      this.woloxLogo = woloxLogo;
      this.emailValidation = /^(?!.*\.\.)[^.][^\s@]+[^.]@[^\-][^\s@]+\.[^\s@]{2,}$/;
      this.passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
      this.user = {};

      this.formSubmit = function() {
        authService.createUser(this.user).then(function(response) {
          if (response.data) {
            authService.login(this.user);
          }
        }, function(response) {
          if (response.status === 422) {
            // eslint-disable-next-line no-alert, no-undef
            alert('Este mail ya está registrado');
            $state.go('login');
          }
        });
      };
    }]
  });
