'use strict';

angular.module('ga4gh').directive('lazy', function($timeout) {
	return {
		restrict: 'C',
		link: function(scope, elm) {
			$timeout(function() {
				$(elm).lazyload({
					effect: 'fadeIn',
					effectspeed: 500
				});
			},
			0);
		}
	};
});

