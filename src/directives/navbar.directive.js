import woloxLogo from './../assets/img/LogoWolox.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .directive('navbar', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      template: require('./../components/navbar/navbar.html'),
      controller: ['authService', function(authService) {
        this.woloxLogo = woloxLogo;
        this.logout = function() {
          authService.logout();
        };
      }],
      controllerAs: 'navCtrl'
    };
  });
