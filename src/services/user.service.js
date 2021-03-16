const angular = require('angular');

angular.module('app-bootstrap')
  .factory('userService', ['$http', '$state', 'authService',
    function($http, $state, authService) {

      return {
        createUser: (user) => {
          $http.post('https://books-training-rails.herokuapp.com/api/v1/users', user)
            .then(function(response) {
              if (response.data) {
                authService.login(user);
              }
            }, function(response) {
              if (response.status === 422) {
                alert('Este mail ya está registrado');
                $state.go('login');
              }
            });
        }
      };
    }
  ]);
