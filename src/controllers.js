(function () {

  'use strict';

  angular.module('inboxControllers', []);

  angular.module('inboxControllers').controller('indexCtrl', function(){
    'ngInject';

    const ctrl = this;
    ctrl.name = 'indexCtrl';
    ctrl.count = 0;
    ctrl.bump = () => {
      ctrl.count++;
    }
  });
}());
