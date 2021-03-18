import woloxLogo from './../../assets/img/LogoWolox.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .component('login', {
    template: require('./login.html'),
    controller: [function() {
      this.woloxLogo = woloxLogo;
      this.emailValidation = /^(?!.*\.\.)[^.][^\s@]+[^.]@[^\-][^\s@]+\.[^\s@]{2,}$/;

      this.formSubmit = function() {
        alert('form submitted');
      };
    }]
  });
