const angular = require('angular');

angular.module('app-bootstrap')
  .component('books', {
    template: require('./books.html'),
    controller: ['booksService', function (booksService) {
      this.bookCover = require('./../../assets/img/book-cover.png');
      this.books = booksService.getBooksList();
    }]
  })
  .filter('searchBook', function() {
    return function (items, searchText) {
      let filtered = [];
      let letterMatch = new RegExp(searchText, 'i');
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (letterMatch.test(item.title) || letterMatch.test(item.author)) {
          filtered.push(item);
        }
      }
      return filtered;
    };
  });
