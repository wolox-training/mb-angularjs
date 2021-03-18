const angular = require('angular');

angular.module('app-bootstrap')
  .directive('compareTo', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {

        ctrl.$validators.compareTo = (val) => val === scope.$eval(attrs.compareTo);

        scope.$watch(attrs.compareTo, () => {
          ctrl.$validate();
        });
      }
    };
  });
