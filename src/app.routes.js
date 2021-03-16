const angular = require('angular');

angular.module('app-bootstrap').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login',
        {
          url: '/login',
          component: 'login'
        })
      .state('signup',
        {
          url: '/signup',
          component: 'signup'
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

angular.module('app-bootstrap')
  .run(['$transitions', 'localStorageService', '$state',
    function ($transitions, localStorageService, $state) {
      $transitions.onStart({ to: (state) => state.name !== 'signup' }, function() {
        if (!localStorageService.get('accessToken')) {
          $state.go('login');
        }
      });
      $transitions.onStart({ to: ['login', 'signup'] }, function() {
        if (localStorageService.get('accessToken')) {
          $state.go('books');
        }
      });
    }
  ]);
