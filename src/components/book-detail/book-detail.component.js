import bookCover from './../../assets/img/book-cover.png';
import badge from './../../assets/img/badge.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .component('bookDetail', {
    template: require('./book-detail.html'),
    controller: ['$stateParams', 'booksService', function ($stateParams, booksService) {
      let bookId = parseInt($stateParams.bookId);
      this.bookCover = bookCover;
      this.badge = badge;
      this.book = {};
      booksService.getBook(bookId).then((response) => {
        this.book = response.data;
      });
    }]
  });
