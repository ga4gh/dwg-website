(function() {
  'use strict';

  angular
    .module('dwgWebsite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
