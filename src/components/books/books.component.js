import bookCover from './../../assets/img/book-cover.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .component('books', {
    template: require('./books.html'),
    controller: ['booksService', function (booksService) {
      this.bookCover = bookCover;
      this.books = booksService.getBooksList();
    }]
  })
  .filter('searchBook', function() {
    return (items, searchText) =>
      items.filter(item => searchText ?
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.author.toLowerCase().includes(searchText.toLowerCase()) : true);
  });
