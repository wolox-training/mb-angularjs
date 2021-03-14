const angular = require('angular');

angular.module('app-bootstrap').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login',
        {
          url: '/login',
          component: 'login'
        })
      .state('books',
        {
          url: '/books',
          component: 'books'
        })
      .state('book-detail',
        {
          url: '/books/{bookId}',
          component: 'bookDetail'
        });
    $urlRouterProvider.otherwise('/login');
  }
]);

angular.module('app-bootstrap').run(['$transitions',
  function ($transitions) {
    $transitions.onBefore({ from: 'home' }, transition => {
      // eslint-disable-next-line no-console
      console.log('Route changed, use ransition.abort(); for abort if you need', transition);
    });
  }
]);
