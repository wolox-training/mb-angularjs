const angular = require('angular');

angular.module('app-bootstrap')
  .factory('authService', ['$http', 'localStorageService', '$state',
    function($http, localStorageService, $state) {

      return {
        login: (user) => {
          $http.post('https://books-training-rails.herokuapp.com/api/v1/users/sign_in', user)
            .then(function(response) {
              localStorageService.set('accessToken', response.headers('access-token'));
              localStorageService.set('client', response.headers('client'));
              localStorageService.set('uid', response.headers('uid'));
              $state.go('books');
            }, function(response) {
              // eslint-disable-next-line no-console
              console.log(response.status);
            });
        }
      };
    }
  ]);
