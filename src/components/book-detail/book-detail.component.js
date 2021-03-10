const angular = require('angular');

angular.module('app-bootstrap')
  .component('bookDetail', {
    template: require('./book-detail.html'),
    controller: ['$stateParams', 'booksService', function ($stateParams, booksService) {
      let bookId = parseInt($stateParams.bookId);
      this.bookCover = require('./../../assets/img/book-cover.png');
      this.badge = require('./../../assets/img/badge.png');
      this.book = booksService.getBook(bookId);
    }]
  });
