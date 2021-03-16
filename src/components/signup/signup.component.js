import woloxLogo from './../../assets/img/LogoWolox.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .component('signup', {
    template: require('./signup.html'),
    controller: ['userService', function(userService) {
      this.woloxLogo = woloxLogo;
      this.emailValidation = /^(?!.*\.\.)[^.][^\s@]+[^.]@[^\-][^\s@]+\.[^\s@]{2,}$/;
      this.passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
      this.user = {};

      this.formSubmit = function() {
        userService.createUser(this.user);
      };
    }]
  })
  .directive('compareTo', function() {
    return {
      require: 'ngModel',
      scope: {
        confirmPassword: '=compareTo'
      },
      link: function(scope, element, attributes, modelVal) {
        modelVal.$validators.compareTo = function(val) {
          return val === scope.confirmPassword;
        };

        scope.$watch('confirmPassword',
          function() {
            modelVal.$validate();
          });
      }
    };
  });
