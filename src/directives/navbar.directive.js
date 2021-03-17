import woloxLogo from './../assets/img/LogoWolox.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .directive('navbar', function() {
    return {
      restrict: 'E',
      template: require('./../components/navbar/navbar.html'),
      controller: ['$state', 'localStorageService', function($state, localStorageService) {
        this.woloxLogo = woloxLogo;
        this.logout = function() {
          localStorageService.clearAll();
          $state.go('login');
        };
      }],
      controllerAs: 'navController'
    };
  });
