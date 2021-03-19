const angular = require('angular');

angular.module('app-bootstrap')
  .factory('booksService', ['$http', 'localStorageService',
    function($http, localStorageService) {

      const booksURL = process.env.API_URL + '/books?';
      const bookURL = process.env.API_URL + '/books/';
      const accesToken = localStorageService.get('accessToken');
      const client = localStorageService.get('client');
      const uid = localStorageService.get('uid');

      return {
        getBooksList: () => $http.get(booksURL, {
          headers: {
            'access-token': accesToken,
            client: client,
            uid: uid
          }
        }),
        getBook: (bookId) => $http.get(bookURL + `${bookId}`, {
          headers: {
            'access-token': accesToken,
            client: client,
            uid: uid
          }
        })
      };
    }
  ]);
