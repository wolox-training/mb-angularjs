const angular = require('angular');
const booksData = require('./../data/books.json');

angular.module('app-bootstrap')
  .factory('booksService', [
    function() {

      const booksList = booksData;

      return {
        getBooksList: () => booksList,
        getBook: (bookId) => booksList.find(({ id }) => id === bookId)
      };
    }
  ]);
