const angular = require('angular');

angular.module('app-bootstrap')
  .factory('authService', ['$http', 'localStorageService', '$state',
    function($http, localStorageService, $state) {

      const loginURL = process.env.API_URL + '/users/sign_in';
      const usersURL = process.env.API_URL + '/users';

      return {
        login: (user) => $http.post(loginURL, user),
        logout: () => {
          localStorageService.clearAll();
          $state.go('login');
        },
        createUser: (user) => $http.post(usersURL, user)
      };
    }
  ]);
