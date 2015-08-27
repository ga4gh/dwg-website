'use strict';

angular.module('ga4gh').controller('octCtrl', function($scope, $log, $window) {
	$scope.map = {
		center: {
			latitude: 40.7234439,
			longitude: -74.0051689
		},
		zoom: 12
	};
	$scope.marker = {
		id: 0,
		center: {
			latitude: 40.7234439,
			longitude: -74.0051689
		},
	};
	$scope.marker.options = {
		events: {
			click: function() {
				// $log.info("user defined event: " + eventName, mapModel, originalEventArgs);
				$window.location.href = 'https://www.google.co.uk/maps/place/New+York+Genome+Center/@40.7233707,-74.0060916,17z/data=!4m2!3m1!1s0x89c2598b5e44b0ab:0xfa2f8035bec62c50';
				//scope apply required because this event handler is outside of the angular domain
				$scope.$apply();
			}
		}
	};

});

