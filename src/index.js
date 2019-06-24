require('angular');

require('./controllers');
require('./directives');

(function() {
  'use strict';

  angular.module('inboxApp', ['inboxControllers', 'inboxDirectives']);
  angular.element(document).ready(function() {
    angular.bootstrap(document, ['inboxApp'], {
      strictDi: true,
    });
  });
})();
