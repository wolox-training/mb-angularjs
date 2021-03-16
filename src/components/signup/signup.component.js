import woloxLogo from './../../assets/img/LogoWolox.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .component('signup', {
    template: require('./signup.html'),
    controller: [function() {
      this.woloxLogo = woloxLogo;
      this.emailValidation = /^(?!.*\.\.)[^.][^\s@]+[^.]@[^\-][^\s@]+\.[^\s@]{2,}$/;
      this.passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

      this.formSubmit = function() {
        alert('form submitted');
      };
    }]
  });
