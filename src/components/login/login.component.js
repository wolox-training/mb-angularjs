import woloxLogo from './../../assets/img/LogoWolox.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .component('login', {
    template: require('./login.html'),
    controller: ['authService', function(authService) {
      this.woloxLogo = woloxLogo;
      this.emailValidation = /^(?!.*\.\.)[^.][^\s@]+[^.]@[^\-][^\s@]+\.[^\s@]{2,}$/;
      this.user = {};

      this.formSubmit = function() {
        authService.login(this.user);
      };
    }]
  });
