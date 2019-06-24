(function () {

  'use strict';

  angular.module('inboxDirectives', []);

  angular.module('inboxDirectives').directive('directiveOne', function() {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'template.html',
      controller: function() {
        'ngInject';
        const ctrl = this;
        ctrl.name = 'indexOne';
        ctrl.count = 0;
        ctrl.bump = () => {
          ctrl.count++;
        }
      },
      controllerAs: '$ctrl'
    };
  });


  angular.module('inboxDirectives').directive('directiveTwo', function() {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'template.html',
      controller: function() {
        'ngInject';
        const ctrl = this;
        ctrl.name = 'indexTwo';
        ctrl.count = 0;
        ctrl.bump = () => {
          ctrl.count++;
        }
      },
      controllerAs: '$ctrl'
    };
  });
}());
