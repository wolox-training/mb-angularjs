const angular = require('angular');

angular.module('app-bootstrap')
  .factory('booksService', ['$http', 'localStorageService',
    function($http, localStorageService) {

      let accesToken = localStorageService.get('accessToken');
      let client = localStorageService.get('client');
      let uid = localStorageService.get('uid');
      const booksList = $http.get('https://books-training-rails.herokuapp.com/api/v1/books?', {
        headers: {
          'access-token': accesToken,
          'client': client,
          'uid': uid
        }
      }).then(function(response) {
          let books = response.data.page;
          return books;
        });

      return {
        getBooksList: () => booksList,
        getBook: (bookId) => booksList.find(({ id }) => id === bookId)
      };
    }
  ]);
